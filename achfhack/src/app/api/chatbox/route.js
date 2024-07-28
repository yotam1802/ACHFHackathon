// src/app/api/chatboxes/route.js
import { NextResponse } from "next/server";
import rateLimit from "express-rate-limit";
import { body, validationResult } from "express-validator";
import { OpenAI } from "openai";
import dotenv from "dotenv";
import clientPromise from "@/app/lib/mongodb";

dotenv.config();

const openai = new OpenAI({
  organization: process.env.OPENAI_ORG,
  apiKey: process.env.OPENAI_KEY,
});

const chatboxLimiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 minutes
  max: 15, // Max 15 requests per window
});

const validateMessages = [
  body("messages.*.role")
    .isIn(["user", "system", "assistant"])
    .withMessage("Invalid role"),
  body("messages.*.content").isString().trim().escape(),
  body("messages").isArray({ max: 10 }).withMessage("Too many messages"),
];

export const config = {
  api: {
    bodyParser: true,
  },
};

export async function POST(req) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return NextResponse.json({ errors: errors.array() }, { status: 400 });
  }

  const { messages } = await req.json();

  try {
    const chatCompletion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "This is a mental health support program. If the person needs help, always include the phrase 'HELP REQUIRED: ' before each return message.",
        },
        ...messages,
      ],
    });

    let responseMessage = chatCompletion.choices[0].message.content;
    console.log(responseMessage);
    if (responseMessage.includes("HELP REQUIRED: ")) {
      const client = await clientPromise;
      const db = client.db("HealthBridge");
      const collection = db.collection("helpNeeded");

      const names = ["John Doe", "Jane Doe", "Alice Smith"];
      const randomName = names[Math.floor(Math.random() * names.length)];

      // Extract the user's original message
      const originalMessage = messages.find(
        (msg) => msg.role === "user"
      ).content;

      // Insert a document in the helpNeeded collection
      await collection.insertOne({
        message: `${randomName} Requested Help`,
        originalMessage,
        timestamp: new Date(),
      });

      responseMessage = responseMessage.replace("HELP REQUIRED: ", "");
      console.log(responseMessage);
    }

    return NextResponse.json({ completion: responseMessage }, { status: 201 });
  } catch (error) {
    console.error("Error adding data:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// Apply rate limiting and validation
export function middleware(req, ev) {
  chatboxLimiter(req, {}, () => {});
  validateMessages.forEach((validation) => validation.run(req));
  return NextResponse.next();
}

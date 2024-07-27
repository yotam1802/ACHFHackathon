import { NextResponse } from "next/server";
import clientPromise from "../../lib/mongodb";

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("HealthBridge");
    const collection = db.collection("helpNeeded");

    const helpNeededData = await collection.find({}).toArray();

    return NextResponse.json(helpNeededData, { status: 200 });
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

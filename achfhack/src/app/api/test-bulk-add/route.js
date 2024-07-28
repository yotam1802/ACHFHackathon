import { NextResponse } from "next/server";
import clientPromise from "@/app/lib/mongodb";

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("HealthBridge");
    const collection = db.collection("clientData");

    await db.collection("clientData").deleteMany({});

    const data = [
      {
        date: "2024-01-01",
        rating: 20,
        name: "John Doe",
        questionResponse: [2, 3, 2, 3, 3, 2, 2, 1, 2],
      },
      {
        date: "2024-01-02",
        rating: 22,
        name: "Jane Doe",
        questionResponse: [3, 3, 3, 3, 3, 2, 2, 2, 1],
      },
      {
        date: "2024-01-03",
        rating: 19,
        name: "John Doe",
        questionResponse: [2, 3, 2, 2, 3, 2, 2, 1, 2],
      },
      {
        date: "2024-01-04",
        rating: 23,
        name: "Jane Doe",
        questionResponse: [3, 3, 3, 3, 3, 2, 2, 2, 2],
      },
      {
        date: "2024-01-05",
        rating: 21,
        name: "John Doe",
        questionResponse: [2, 3, 3, 3, 3, 2, 2, 2, 1],
      },
      {
        date: "2024-01-06",
        rating: 24,
        name: "Alice Smith",
        questionResponse: [3, 3, 3, 3, 3, 3, 2, 2, 2],
      },
      {
        date: "2024-01-07",
        rating: 20,
        name: "John Doe",
        questionResponse: [2, 3, 2, 3, 3, 2, 2, 2, 1],
      },
      {
        date: "2024-01-08",
        rating: 23,
        name: "Jane Doe",
        questionResponse: [3, 3, 3, 3, 3, 2, 2, 2, 2],
      },
      {
        date: "2024-01-09",
        rating: 10,
        name: "Alice Smith",
        questionResponse: [1, 1, 1, 1, 1, 1, 1, 1, 2],
      }, // dip
      {
        date: "2024-01-10",
        rating: 21,
        name: "John Doe",
        questionResponse: [2, 3, 3, 3, 3, 2, 2, 2, 1],
      },
      {
        date: "2024-01-11",
        rating: 22,
        name: "Jane Doe",
        questionResponse: [3, 3, 3, 3, 3, 2, 2, 2, 1],
      },
      {
        date: "2024-01-12",
        rating: 23,
        name: "Alice Smith",
        questionResponse: [3, 3, 3, 3, 3, 2, 2, 2, 2],
      },
      {
        date: "2024-01-13",
        rating: 19,
        name: "John Doe",
        questionResponse: [2, 3, 2, 3, 3, 2, 2, 1, 1],
      },
      {
        date: "2024-01-14",
        rating: 23,
        name: "Jane Doe",
        questionResponse: [3, 3, 3, 3, 3, 2, 2, 2, 2],
      },
      {
        date: "2024-01-15",
        rating: 24,
        name: "Alice Smith",
        questionResponse: [3, 3, 3, 3, 3, 3, 2, 2, 2],
      },
      {
        date: "2024-01-16",
        rating: 9,
        name: "John Doe",
        questionResponse: [1, 1, 1, 1, 1, 1, 1, 1, 2],
      },
      {
        date: "2024-01-17",
        rating: 20,
        name: "Jane Doe",
        questionResponse: [2, 3, 2, 3, 3, 2, 2, 2, 1],
      },
      {
        date: "2024-01-18",
        rating: 25,
        name: "Alice Smith",
        questionResponse: [3, 3, 3, 3, 3, 3, 3, 2, 2],
      },
      {
        date: "2024-01-19",
        rating: 19,
        name: "John Doe",
        questionResponse: [2, 3, 2, 3, 3, 2, 2, 1, 1],
      },
      {
        date: "2024-01-20",
        rating: 23,
        name: "Jane Doe",
        questionResponse: [3, 3, 3, 3, 3, 2, 2, 2, 2],
      },
      {
        date: "2024-01-21",
        rating: 24,
        name: "Alice Smith",
        questionResponse: [3, 3, 3, 3, 3, 3, 2, 2, 2],
      },
      {
        date: "2024-01-22",
        rating: 22,
        name: "John Doe",
        questionResponse: [3, 3, 3, 3, 3, 2, 2, 2, 1],
      },
      {
        date: "2024-01-23",
        rating: 19,
        name: "Jane Doe",
        questionResponse: [2, 3, 2, 3, 3, 2, 2, 1, 1],
      },
      {
        date: "2024-01-24",
        rating: 22,
        name: "Alice Smith",
        questionResponse: [3, 3, 3, 3, 3, 2, 2, 2, 1],
      },
      {
        date: "2024-01-25",
        rating: 21,
        name: "John Doe",
        questionResponse: [2, 3, 3, 3, 3, 2, 2, 2, 1],
      },
      {
        date: "2024-01-26",
        rating: 23,
        name: "Jane Doe",
        questionResponse: [3, 3, 3, 3, 3, 2, 2, 2, 2],
      },
      {
        date: "2024-01-27",
        rating: 23,
        name: "Alice Smith",
        questionResponse: [3, 3, 3, 3, 3, 2, 2, 2, 2],
      }, // dip
      {
        date: "2024-01-28",
        rating: 22,
        name: "John Doe",
        questionResponse: [3, 3, 3, 3, 3, 2, 2, 2, 1],
      },
      {
        date: "2024-01-29",
        rating: 20,
        name: "Jane Doe",
        questionResponse: [2, 3, 2, 3, 3, 2, 2, 2, 1],
      },
      {
        date: "2024-01-30",
        rating: 24,
        name: "Alice Smith",
        questionResponse: [3, 3, 3, 3, 3, 3, 2, 2, 2],
      },
      {
        date: "2024-01-31",
        rating: 21,
        name: "John Doe",
        questionResponse: [2, 3, 3, 3, 3, 2, 2, 2, 1],
      },
      {
        date: "2024-02-01",
        rating: 22,
        name: "Jane Doe",
        questionResponse: [3, 3, 3, 3, 3, 2, 2, 2, 1],
      },
      {
        date: "2024-02-02",
        rating: 22,
        name: "Alice Smith",
        questionResponse: [3, 3, 3, 3, 3, 2, 2, 2, 1],
      },
      {
        date: "2024-02-03",
        rating: 23,
        name: "John Doe",
        questionResponse: [3, 3, 3, 3, 3, 2, 2, 2, 2],
      },
      {
        date: "2024-02-04",
        rating: 19,
        name: "Jane Doe",
        questionResponse: [2, 3, 2, 3, 3, 2, 2, 1, 1],
      },
      {
        date: "2024-02-05",
        rating: 25,
        name: "Alice Smith",
        questionResponse: [3, 3, 3, 3, 3, 3, 3, 2, 2],
      },
      {
        date: "2024-02-06",
        rating: 24,
        name: "John Doe",
        questionResponse: [3, 3, 3, 3, 3, 3, 2, 2, 2],
      }, // spike
      {
        date: "2024-02-07",
        rating: 23,
        name: "Jane Doe",
        questionResponse: [3, 3, 3, 3, 3, 2, 2, 2, 2],
      },
      {
        date: "2024-02-08",
        rating: 25,
        name: "Alice Smith",
        questionResponse: [3, 3, 3, 3, 3, 3, 3, 2, 2],
      },
      {
        date: "2024-02-09",
        rating: 22,
        name: "John Doe",
        questionResponse: [3, 3, 3, 3, 3, 2, 2, 2, 1],
      },
      {
        date: "2024-02-10",
        rating: 20,
        name: "Jane Doe",
        questionResponse: [2, 3, 2, 3, 3, 2, 2, 2, 1],
      },
      {
        date: "2024-02-11",
        rating: 21,
        name: "Alice Smith",
        questionResponse: [2, 3, 3, 3, 3, 2, 2, 2, 1],
      },
      {
        date: "2024-02-12",
        rating: 23,
        name: "John Doe",
        questionResponse: [3, 3, 3, 3, 3, 2, 2, 2, 2],
      },
      {
        date: "2024-02-13",
        rating: 19,
        name: "Jane Doe",
        questionResponse: [2, 3, 2, 3, 3, 2, 2, 1, 1],
      },
      {
        date: "2024-02-14",
        rating: 20,
        name: "Alice Smith",
        questionResponse: [2, 3, 2, 3, 3, 2, 2, 2, 1],
      },
      {
        date: "2024-02-15",
        rating: 22,
        name: "John Doe",
        questionResponse: [3, 3, 3, 3, 3, 2, 2, 2, 1],
      },
      {
        date: "2024-02-16",
        rating: 24,
        name: "Jane Doe",
        questionResponse: [3, 3, 3, 3, 3, 3, 2, 2, 2],
      },
      {
        date: "2024-02-17",
        rating: 14,
        name: "Alice Smith",
        questionResponse: [1, 1, 1, 3, 1, 2, 2, 2, 1],
      },
      {
        date: "2024-02-18",
        rating: 23,
        name: "John Doe",
        questionResponse: [3, 3, 3, 3, 3, 2, 2, 2, 2],
      },
      {
        date: "2024-02-19",
        rating: 21,
        name: "Jane Doe",
        questionResponse: [2, 3, 3, 3, 3, 2, 2, 2, 1],
      },
      {
        date: "2024-02-20",
        rating: 12,
        name: "Alice Smith",
        questionResponse: [1, 1, 1, 1, 1, 2, 2, 2, 1],
      },
    ];

    const result = await collection.insertMany(data);

    return NextResponse.json(
      { message: "Data added successfully", result },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error adding data:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

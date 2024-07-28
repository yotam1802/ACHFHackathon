import { NextResponse } from "next/server";
import clientPromise from "@/app/lib/mongodb";
import { ObjectId } from "mongodb";

export const config = {
  api: {
    bodyParser: true,
  },
};

export async function POST(req) {
  try {
    const { _id } = await req.json();
    const client = await clientPromise;
    const db = client.db("HealthBridge");
    const collection = db.collection("helpNeeded");

    const result = await collection.deleteOne({ _id: new ObjectId(_id) });

    if (result.deletedCount === 1) {
      return NextResponse.json(
        { message: "Document deleted successfully" },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { error: "Document not found" },
        { status: 404 }
      );
    }
  } catch (error) {
    console.error("Error deleting document:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

import clientPromise from "@/app/lib/mongodb";

export const config = {
  api: {
    bodyParser: true, // Use built-in body parser
  },
};

export async function POST(req) {
  try {
    const client = await clientPromise;
    const db = client.db("HealthBridge");
    const collection = db.collection("clientData");

    const data = await req.json(); // Parse the JSON from the request body
    data.date = new Date().toISOString(); // Add the current date and time

    console.log(data);

    const result = await collection.insertOne(data);

    return new Response(
      JSON.stringify({ message: "Data added successfully", result }),
      {
        status: 201,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error adding data:", error);
    return new Response(JSON.stringify({ message: "Internal server error" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}

export async function GET(req) {
  try {
    const client = await clientPromise;
    const db = client.db("HealthBridge");
    const collection = db.collection("clientData");

    const data = await collection.find({}).toArray();

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    return new Response(JSON.stringify({ message: "Internal server error" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}

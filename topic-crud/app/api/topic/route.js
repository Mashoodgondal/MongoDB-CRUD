// pages / api / items.js

import connectDB from '@/lib/connection'; // import the mongoose connection

import Topic from '@/models/topic'; // import the Mongoose model
import { NextResponse } from 'next/server';


// connectDB(); // Ensure that we are connected to the database

export const GET = async (req) => {

  try {
    // Fetch all items from the database
    await connectDB()
    const items = await Topic.find(); // Mongoose query to get all documents
    return NextResponse.json(items, { status: 200 }); // Send the data back as JSON
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}
// export const GET = async (req) => {
//   try {
//     // Attempt to connect to the database
//     // await connectDB();
//     console.log("Database connection successful");

//     // Fetch all items from the database
//     const items = await Topic.find();
//     console.log("items", items)
//     return NextResponse.json(items, { status: 200 }); // Send the data back as JSON
//   } catch (error) {
//     // Check if the error is related to the database connection
//     if (error.name === 'MongoNetworkError') {
//       console.error("Database connection failed:", error);
//       return NextResponse.json(
//         { error: 'Database connection failed. Please try again later.' },
//         { status: 500 }
//       );
//     }

//     // Check if the error is related to the query
//     if (error.name === 'MongoError') {
//       console.error("Database query failed:", error);
//       return NextResponse.json(
//         { error: 'Failed to fetch data from the database.' },
//         { status: 500 }
//       );
//     }

//     // Handle unexpected errors
//     console.error("Unexpected error:", error);
//     return NextResponse.json(
//       { error: 'An unexpected error occurred. Please try again.' },
//       { status: 500 }
//     );
//   }
// };
export const POST = async (req) => {
  const { title, description } = await req.json()
  // await connectDB()
  await Topic.create({ title, description })
  return NextResponse.json({ message: "Topic created" }, { status: 200 })

}

export const DELETE = async (req) => {
  const id = req.nextUrl.searchParams.get("id")
  await Topic.findByIdAndDelete(id);
  return NextResponse.json({ message: "Topic deleted" }, { status: 200 })
}






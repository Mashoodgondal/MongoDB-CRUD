// import connectDB from "@/lib/connection"
// import Topic from "@/models/topic"
// import { NextResponse } from "next/server"

// export const PUT = async (req, { params }) => {
//     const { id } = params
//     const { newTitle: title, newDesription: description } = await req.json()
//     await connectDB()
//     await Topic.findByIdAndUpdate(id, { title, description })
//     return NextResponse.json({ messege: "Topic Updated" }, { status: 200 })
// }

// export const GET = async (req, { params }) => {
//     const { id } = params
//     await connectDB()
//     const items = await Topic.findOne({ _id: id })
//     return NextResponse.json(items, { status: 200 })
// }
import connectDB from "@/lib/connection";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export const PUT = async (req, context) => {
    try {
        const { params } = context; // Access `params` from `context`
        const { id } = params;

        // Parse request body
        const { newTitle: title, newDescription: description } = await req.json();

        // Connect to database
        await connectDB();

        // Update the topic
        const updatedTopic = await Topic.findByIdAndUpdate(id, { title, description }, { new: true });

        if (!updatedTopic) {
            return NextResponse.json({ message: "Topic not found" }, { status: 404 });
        }

        return NextResponse.json({ message: "Topic updated successfully", topic: updatedTopic }, { status: 200 });
    } catch (error) {
        console.error("Error updating topic:", error);
        return NextResponse.json({ message: "Failed to update topic", error: error.message }, { status: 500 });
    }
};

export const GET = async (req, context) => {
    try {
        const { params } = context; // Access `params` from `context`
        const { id } = params;

        // Connect to database
        await connectDB();

        // Fetch the topic
        const topic = await Topic.findById(id);

        if (!topic) {
            return NextResponse.json({ message: "Topic not found" }, { status: 404 });
        }

        return NextResponse.json({ details: topic }, { status: 200 });
    } catch (error) {
        console.error("Error fetching topic:", error);
        return NextResponse.json({ message: "Failed to fetch topic", error: error.message }, { status: 500 });
    }
};

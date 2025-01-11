import connectDB from "@/lib/connection"
import Topic from "@/models/topic"
import { NextResponse } from "next/server"

export const PUT = async (req, { params }) => {
    const { id } = params
    const { newTitle: title, newDesription: description } = await req.json()
    await connectDB()
    await Topic.findByIdAndUpdate(id, { title, description })
    return NextResponse.json({ messege: "Topic Updated" }, { status: 200 })
}

export const GET = async (req, { params }) => {
    const { id } = params
    await connectDB()
    const items = await Topic.findOne({ _id: id })
    return NextResponse.json(items, { status: 200 })
}
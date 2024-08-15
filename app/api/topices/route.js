import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export async function POST(req){
    const {title,description} = await req.json();
    await connectMongoDB();
    await Topic.create({title,description});
    return NextResponse.json({message:"new topic created"}, {status: 201})
}



export async function GET(req){
    await connectMongoDB();
    const topics = await Topic.find();
    return NextResponse.json(topics, {status: 200})
}
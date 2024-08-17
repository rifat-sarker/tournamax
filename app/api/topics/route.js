import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export async function POST(req){
    const {title,description} = await req.json();
    await connectMongoDB();
    await Topic.create({title,description});
    return NextResponse.json({message:"new topic created"}, {status: 201})
}



export async function GET(){
    // await connectMongoDB();
    // const topics = await Topic.find();
    // return NextResponse.json({topics})

    try {
        await connectMongoDB(); // Connect to the MongoDB database

        const topics = await Topic.find(); // Fetch topics from the database

        // Return JSON response
        return NextResponse.json({ topics });
    } catch (error) {
        console.error('Error fetching topics:', error);

        // Handle error and return a server error response
        return NextResponse.json({ error: 'Failed to fetch topics' }, { status: 500 });
    }
}

export async function DELETE(req){
    const id = req.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Topic.findByIdAndDelete(id);
    return NextResponse.json({message:"topic deleted"}, {status: 200})

}
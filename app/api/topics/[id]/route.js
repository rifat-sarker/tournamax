import Topic from "@/models/topic";

export async function PUT(req, {params}){
    const {id} = params;
    const updatedTopic = await Topic.findByIdAndUpdate(id, req.body, {new: true});
    await connectMongoDB();
    return NextResponse.json({updatedTopic}, {status: 200});
}
import mongoose, {Schema} from "mongoose";

const topicSchema = new Schema(
    {
        tile: String,
        description: String,
    },
    {
        timestamps: true
    }
)

const Topic = mongoose.models.Topic || mongoose.model("Topic", topicSchema)

export default Topic;
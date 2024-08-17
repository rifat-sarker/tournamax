// "use client"
import EditTopic from "@/components/EditTopic";
import axios from "axios";

const getTopicByid = async (id) => {
  try {
    const res = await axios.get(`http://localhost:3000/api/topics/${id}`);
    if (res) {
      return res.data;
    } else {
      throw new Error("Failed to fetch topic");
    }

    // const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
    //   cache: "no-store",
    // });
    // if (!res.ok) {
    //   throw new Error("Failed to fetch topic");
    // }
    // return res.json();
  } catch (error) {
    console.log(error);
  }
};
export default async function EditTopicForm({ params }) {
  const { id } = params;
  const { topic } = await getTopicByid(id);
  const { title, description } = topic;
  return <EditTopic id={id} title={title} description={description} />;
}

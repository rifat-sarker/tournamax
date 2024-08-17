import Link from "next/link";
import { FaEdit } from "react-icons/fa";
import DeleteBtn from "./DeleteBtn";

const allTopics = async () => {
  try {
   const res = await fetch("http://localhost:3000/api/topics", {
    cache: "no-store"
   })

    if (!res.ok) {
      throw new Error("failed");
    }
    return res.json();
  } catch (error) {
    console.log(error, "error when getting topics");
  }
};

export default async function TopicList() {
  const { topics } = await allTopics();

  console.log(topics)
 

  return (
    <>
      {topics.map((topic) => (
        <div
          key={topic.id}
          className="flex justify-between gap-5 p-4 border rounded-lg shadow-md my-3 items-start"
        >
          <div>
            <h2 className="text-xl font-bold">{topic.title}</h2>
            <p>{topic.description}</p>
          </div>
          <div className="flex gap-4">
            <DeleteBtn id={topic._id}/>
            <Link href={`/editTopic/${topic._id}`}>
              <FaEdit className="size-6 text-slate-500" />
            </Link>
          </div>
        </div> 
      ))}
    </>
  );
}

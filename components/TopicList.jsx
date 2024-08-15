import Link from "next/link";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";

const allTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topics", {
      cache: "no-store",
    });

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

  // console.log(topics)
  return (
    <>
      {topics.map((topic) => (
        <div
          key={topic.id}
          className="flex justify-between gap-5 p-4 border rounded-lg shadow-md my-3"
        >
          <div>
            <h2 className="text-xl font-bold">{topic.title}</h2>
            <p>{topic.description}</p>
          </div>
          <div className="flex gap-4">
            <Link className="" href={"/deleteTopic"}>
              <RiDeleteBin6Line className="size-6 text-red-500" />
            </Link>
            <Link href={"/editTopic"}>
              <FaEdit className="size-6 text-slate-500" />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}

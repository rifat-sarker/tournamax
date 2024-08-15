import Link from "next/link";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";

export default function TopicList() {
  return (
    <>
      <div className="flex justify-between gap-5 p-4 border rounded-lg shadow-md my-3">
        <div>
          <h2 className="text-xl font-bold">Topic Title</h2>
          <p>Description</p>
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
    </>
  );
}

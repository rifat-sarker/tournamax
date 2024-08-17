"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function DeleteBtn({ id }) {
const router = useRouter();

  const deleteTopic = async () => {
    const confirmed = confirm("Are you sure?");
    if (confirmed) {
      const res = await axios.delete(
        `${process.env.NEXT_PUBLIC_API_URL}/api/topics?id=${id}`
      );
      if (res) {
        console.log("Topic deleted successfully");
      } 
      router.refresh();
    }
  };

  return (
    <button onClick={deleteTopic}>
      <RiDeleteBin6Line className="size-6 text-red-500" />
    </button>
  );
}

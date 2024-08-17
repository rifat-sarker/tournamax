"use client";
import axios from "axios";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function DeleteBtn({ id }) {

  const deleteTopic = async () => {
    const confirmed = confirm("Are you sure?");
    if (confirmed) {
      const res = await axios.delete(
        `http://localhost:3000/api/topics?id=${id}`
      );
      if (res) {
        console.log("Topic deleted successfully");
      } 
    }
  };

  return (
    <button onClick={deleteTopic}>
      <RiDeleteBin6Line className="size-6 text-red-500" />
    </button>
  );
}

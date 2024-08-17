"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function EditTopic({ id, title, description }) {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const router = useRouter();

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`http://localhost:3000/api/topics/${id}` ,{newTitle, newDescription});
      if (res) {
        // return res.data;
        router.refresh();
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-[60%]  rounded-lg p-6 shadow-lg mx-auto gap-3"
      >
        <input
          onChange={(e) => setNewTitle(e.target.value)}
          value={newTitle}
          className="border rounded-md w-full px-4 py-2 my-3 border-slate-200"
          type="text"
          placeholder="Topic Title"
        />
        <textarea
          onChange={(e) => setNewDescription(e.target.value)}
          value={newDescription}
          rows={4}
          className="border rounded-md w-full px-4 py-2 mb-3 border-slate-200"
          type="text"
          placeholder="Topic Description"
        />
        <button className="border bg-green-600 font-bold text-white px-6 py-3 rounded-md">
          Update Topic
        </button>
      </form>
    </div>
  );
}

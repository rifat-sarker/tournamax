"use client";

import axios from "axios";
import { useRouter } from "next/navigation";

export default function AddTopic() {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;

    const addTopic = { title, description };
    const res = axios.post("http://localhost:3000/api/topics", addTopic);
    if(!title || !description){
      alert("Please fill all fields");
      return;
    }

    try {
      if (res) {
        console.log("Topic added successfully");
        router.push("/")
        router.refresh();
      } else {
        throw new Error ("Failed to create a topic")
      }
    } catch (error) {
      console.log(error)
    }
    
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        className="border w-full px-8 py-2 border-slate-500"
        type="text"
        name="title"
        placeholder="Topic Title"
      />
      <input
        className="border w-full px-8 py-2 border-slate-500"
        type="text"
        name="description"
        placeholder="Topic Description"
      />
      <button
        type="submit"
        className="border bg-green-600 font-bold text-white px-6 py-3 w-fit"
      >
        Add Topic
      </button>
    </form>
  );
}

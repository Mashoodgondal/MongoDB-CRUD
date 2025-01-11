"use client"

import Error from "next/error";
import Link from "next/link";
// import { headers } from "next/headers";
import { useState } from "react";

const EdditTopicForm = ({ id, title, description }) => {
  const [newTitle, setnewTitle] = useState(title)
  const [newDescroption, setnewDesctiption] = useState(description)
  const updateHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:3000/api/topic/${id}`, { method: "PUT", headers: { "Content-type": "application/json" }, body: JSON.stringify({ newTitle, newDescroption }) })
      if (!res.ok) {
        throw new Error("Error in updating the topic")
      }
    } catch (error) {

    }
  }
  return (
    <div>
      <form className="flex flex-col gap-2 p-6">
        <input
          onChange={(e) => setnewTitle(e.target.value)}
          value={newTitle}
          type="text"
          placeholder="Add Title"
          className="px-8 py-2 border border-slate-600  "
        />
        <input
          onChange={(e) => setnewDesctiption(e.target.value)}
          value={newDescroption}
          type="text"
          placeholder="Add Description"
          className="px-8 py-2 border border-slate-600 "
        />
        <Link href="/"><button onClick={updateHandler} className="bg-green-500 px-6 py-1 text-white font-bold w-fit rounded-md hover:bg-green-600 shadow-lg">
          Update
        </button></Link>
      </form>
    </div>
  );
};

export default EdditTopicForm;

// 
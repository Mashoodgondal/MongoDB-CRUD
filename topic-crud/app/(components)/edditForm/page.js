"use client"


import Link from "next/link";
import { useState } from "react";


const EdditTopicForm = ({ id, title, description }) => {
  const [newTitle, setnewTitle] = useState(title)
  const [newDescription, setnewDesctiption] = useState(description)
  const submitHandler = async () => {

    try {
      const res = await fetch(`http://localhost:3000/api/topic/${id}`, {
        method: "PUT", headers: { "Content-type": "application/json", },
        body: JSON.stringify({ newTitle, newDescription }),
      })
      if (!res.ok) {
        throw new Error('Failed to update topics')
      }
    } catch (error) {
      console.log("Error in Updating");

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
          className="px-8 py-2 text-gray-600 border border-slate-600  "
        />
        <input
          onChange={(e) => setnewDesctiption(e.target.value)}
          value={newDescription}
          type="text"
          placeholder="Add Description"
          className="px-8 py-2 text-gray-600 border border-slate-600 "
        />
        <Link href='/'> <button onClick={submitHandler} className="bg-green-500 px-6 py-1 text-white font-bold w-fit rounded-md hover:bg-green-600 shadow-lg">
          Update
        </button></Link>


      </form>
    </div>
  );
};

export default EdditTopicForm;

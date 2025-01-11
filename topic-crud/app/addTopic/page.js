"use client"
import { useState } from "react";
import React from "react";
import Link from "next/link";

const addTopic = () => {
  const [title, settitle] = useState("")
  const [description, setdescription] = useState("")
  const submitHandler = async () => {
    if (!title || !description) {
      alert('Title and description are requered')
    }
    try {
      const res = await fetch('http://localhost:3000/api/topic', { method: "POST", headers: { "Content-type": "application/json" }, body: JSON.stringify({ title, description }) })
    } catch (error) {

    }
  }
  return (
    <div>
      <form className="flex flex-col gap-2 p-6">
        <input
          onChange={(e) => settitle(e.target.value)}
          value={title}
          type="text"
          placeholder="Add Title"
          className="px-8 py-2 text-gray-700 border border-slate-600  "
        />
        <input
          onChange={(e) => setdescription(e.target.value)}
          value={description}
          type="text"
          placeholder="Add Description"
          className="px-8 py-2 border text-gray-700 border-slate-600 "
        />
        <Link href="/">
          <button onClick={submitHandler} className="bg-green-500 px-6 py-1 text-white font-bold w-fit rounded-md hover:bg-green-600 shadow-lg">
            Submit
          </button>
        </Link>
      </form>
    </div>
  );
};

export default addTopic;

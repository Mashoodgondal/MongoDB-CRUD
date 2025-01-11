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
// "use client";
// import React, { useEffect, useState } from "react";
// import { HiPencilAlt } from "react-icons/hi";

// const getTopicByid = async (id) => {
//   try {
//     const res = await fetch(`http://localhost:3000/api/topic/${id}`, { cache: "no-store" });

//     if (!res.ok) {
//       throw new Error("Failed to fetch topic");
//     }

//     const data = await res.json();
//     return data;
//   } catch (error) {
//     console.error("Error in fetching topics:", error);
//     return null;
//   }
// };

// const EdditTopicForm = ({ id }) => {
//   const [topic, setTopic] = useState(null);

//   useEffect(() => {
//     const fetchTopic = async () => {
//       const data = await getTopicByid(id);
//       if (data) {
//         setTopic(data);
//       }
//     };

//     fetchTopic();
//   }, [id]);

//   if (!topic) {
//     return <p>Loading...</p>; // Show a loading state while fetching
//   }

//   const { title, description } = topic;

//   return (
//     <div>
//       <button className="hover:text-blue-600">
//         <HiPencilAlt size={24} title={title} description={description} />
//       </button>
//     </div>
//   );
// };

// export default EdditTopicForm;

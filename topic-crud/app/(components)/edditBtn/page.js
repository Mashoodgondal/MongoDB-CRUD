"use client"
import React from "react";
import { HiPencilAlt } from "react-icons/hi";

const getTopicByid = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/topic/${id}`, { cache: "no-store" });

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }

    const data = await res.json(); // Ensure correct parsing
    return data; // Return the entire response
  } catch (error) {
    console.error("Error in fetching topics:", error);
    return null; // Return null in case of error
  }
};

const EdditBtn = async (params) => {

  const { id } = params
  const { topic } = await getTopicByid(id)
  const { title, description } = topic;

  return (
    <div>
      <button className="hover:text-blue-600">
        <HiPencilAlt size={24} id={id} title={title} description={description} />
      </button>
    </div>
  );
};

// export default EdditBtn;
// const getTopicByid = async (id) => {
//   try {
//     const res = await fetch(`http://localhost:3000/api/topic/${id}`, { cache: "no-store" });

//     if (!res.ok) {
//       throw new Error("Failed to fetch topic");
//     }

//     const data = await res.json(); // Ensure correct parsing
//     return data; // Return the entire response
//   } catch (error) {
//     console.error("Error in fetching topics:", error);
//     return null; // Return null in case of error
//   }
// };

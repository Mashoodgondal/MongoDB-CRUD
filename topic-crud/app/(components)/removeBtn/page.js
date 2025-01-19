"use client"


import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";

const RemoveBtn = ({ id }) => {
  const removetopic = async () => {
    const confirmed = confirm("Are you sure?");
    if (confirmed) {
      try {
        const response = await fetch(`http://localhost:3000/api/topic?id=${id}`, {
          method: "DELETE",
        });

        if (!response.ok) {
          throw new Error("Failed to delete the topic");
        }


        window.location.reload();
      } catch (error) {
        console.error(error);
        alert("Error deleting the topic");
      }
    }
  };

  return (
    <div>
      <button onClick={removetopic} className="text-red-400 hover:text-red-500">
        <RiDeleteBinLine size={24} />
      </button>
    </div>
  );
};

export default RemoveBtn;

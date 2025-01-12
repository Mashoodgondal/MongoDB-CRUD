
import EdditTopicForm from "@/app/(components)/edditForm/page";
import React from "react";

const getTopicByid = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/topic/${id}`, { cache: "no-store" });
    if (!res.ok) {
      throw new Error("Error fetching topic details");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error in fetching topic:", error);
    return null;
  }
};

const EdditTopic = async ({ params }) => {
  // Ensure `params` is awaited before accessing `id`
  const { id } = await params;  // Await params to avoid accessing synchronously.

  const data = await getTopicByid(id);

  if (!data || !data.details) {
    return (
      <p className="text-red-500">
        Failed to load topic details. Please try again later or contact support.
      </p>
    );
  }

  const { title, description } = data.details;

  return (
    <div>
      <EdditTopicForm id={id} title={title} description={description} />
    </div>
  );
};

export default EdditTopic;


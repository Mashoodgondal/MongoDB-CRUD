
import React from "react";
import Link from "next/link";
import RemoveBtn from "../removeBtn/page";

import EdditBtn from "../edditBtn/page";

const getTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topic", { cache: "no-store" });
    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }
    return await res.json();
  } catch (error) {
    console.error("Error loading topics:", error);
    return [];
  }
};

const TopicList = async () => {
  const topics = await getTopics();
  if (!topics || topics.length === 0) {
    return <p className="text-red-500">No topics available.</p>;
  }

  return (
    <div className="px-3 md:px-5">
      {topics.map((t) => (
        <div
          key={t._id}
          className="p-4 m-4 border border-slate-500 flex items-center justify-between rounded-md"
        >
          <div>
            <h1 className="text-xl font-bold">{t.title}:</h1>
            <p className="text-gray-600">{t.description}</p>
          </div>
          <div className="flex items-center justify-center gap-4">
            <Link href={`/editTopic/${t._id}`}>
              <EdditBtn />
            </Link>
            <Link href="/"><RemoveBtn id={t._id} /></Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopicList;





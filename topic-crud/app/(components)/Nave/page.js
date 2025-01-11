import Link from "next/link";
import React from "react";

const Nave = () => {
  return (
    <div className="m-4 lg:m-8 px-4 py-3 lg:px-12 flex item-center justify-between bg-slate-800 rounded-md shadow-md">
      <Link href={"/"} className="text-white text-2xl font-bold">
        TODO LIST.
      </Link>

      <Link href={"addTopic"} className="bg-white p-1 rounded-md dark:text-blue-500">
        Add Topic
      </Link>
    </div>
  );
};

export default Nave;

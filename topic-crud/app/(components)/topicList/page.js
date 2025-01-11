// import React, { cache } from "react";

// import RemoveBtn from "../RemoveBtn/page";

// import Link from "next/link";

// import EdditBtn from "../edditBtn/page";
// const getTopics = async () => {
//   try {
//     await fetch('http://localhost:3000/api/topic', { cache: "no-store" })
//     if (!res.ok) {
//       throw new Error('failed to fetch')
//     }
//     return res.json()
//   } catch (error) {
//     console.log("Error in topics");

//   }
// }

// const TopicList = async () => {
//   const topics = await getTopics()
//   return (
//     <>
//       {topics.map((t) => (
//         <div className="p-4 m-4 border border-slate-500 flex items-center justify-between rounded-md">
//           <div>
//             <h1>{t.title}</h1>
//             <p>{t.description}</p>
//           </div>
//           <div className="flex items-center justify-center gap-4">
//             <Link href={`/editTopic/${t._id}`}>
//               <EdditBtn />
//             </Link>
//             <RemoveBtn />
//           </div>
//         </div>
//       ))}
//     </>
//   );
// };

// export default TopicList;
// import React from "react";
// import Link from "next/link";
// import RemoveBtn from "../RemoveBtn/page";
// import EdditBtn from "../edditBtn/page";

// const getTopics = async () => {
//   try {
//     const res = await fetch('http://localhost:3000/api/topic', { cache: "no-store" }); // Assign fetch result
//     if (!res.ok) {
//       throw new Error("Failed to fetch topics");
//     }
//     return await res.json(); // Properly parse JSON response
//   } catch (error) {
//     console.error("Error loading topics:", error);
//     return []; // Return an empty array or fallback value
//   }
// };

// const TopicList = async () => {
//   const topics = await getTopics();

//   // Handle cases where topics fail to load
//   if (!topics || topics.length === 0) {
//     return <p className="text-red-500">No topics available.</p>;
//   }

//   return (
//     <div>
//       {topics.map((t) => (
//         <div
//           key={t._id} // Add a unique key for each element
//           className="p-4 m-4 border border-slate-500 flex items-center justify-between rounded-md"
//         >
//           <div>
//             <h1 className="text-xl font-bold">{t.title}:</h1>
//             <p className="text-gray-400 lg:ml-8">{t.description}</p>
//           </div>
//           <div className="flex items-center justify-center gap-4">
//             <Link href={`/editTopic/${t._id}`}>
//               <EdditBtn />
//             </Link>
//             <RemoveBtn id={t._id} />
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default TopicList;
import React from "react";
import Link from "next/link";
import RemoveBtn from "../removeBtn/page"; // Check this path
// import RemoveBtn from "../RemoveBtn/page";
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




// const getTopics = async () => {
//   try {
//     const res = await fetch('http://localhost:3000/api/topic', { cache: "no-store" });
//     if (!res.ok) {
//       throw new Error("Failed to fetch topics");
//     }
//     return await res.json(); // Ensure proper JSON parsing
//   } catch (error) {
//     console.error("Error loading topics:", error);
//     return null; // Return null or a fallback value
//   }
// };
// -----------
// const data = await getTopics(); // Retrieve the entire API response
// if (!data || !data.Topics) {
//   return <p className="text-red-500">Failed to load topics.</p>; // Handle the error gracefully in the UI
// }

// const { Topics } = data; // Destructure safely

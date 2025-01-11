// import mongoose, { Schema } from "mongoose";

// const topicSchema = new Schema(
//   {
//     title: String,
//     description: String,
//   },
//   {
//     timestamps: true,
//   }
// );
// const Topic = mongoose.model.Topic || mongoose.models("Topic", topicSchema);
// export default Topic;

import mongoose from "mongoose";
import { Schema } from "mongoose";
const topicSchema = new Schema(
  {
    title: String,
    description: String,
  },
  {
    timestamps: true,
  }
);

// Check if the 'Topic' model already exists, otherwise create it
const Topic =
  mongoose.models.Details || mongoose.model("Details", topicSchema);

export default Topic;

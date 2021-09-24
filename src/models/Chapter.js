import { Schema, model } from "mongoose";

const chapterSchema = new Schema(
  {
    title: String,
    content: String,
    audioURL: String,
    imgURL: String,
    
  },
  { versionKey: false }
);

export default model("Chapter", chapterSchema)
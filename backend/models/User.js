import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      min: 2,
      max: 20,
      unique: true,
    },

    password: {
      type: String,
      require: true,
      min: 6,
      unique: true,
    },
    type: {
      type: String,
      required: true,
    },
    header: {
      type: String,
    },
    post: {
      type: String,
    },
    info: {
      type: String,
    },
    company: {
      type: String,
    },
    salary: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema); //colle and schema

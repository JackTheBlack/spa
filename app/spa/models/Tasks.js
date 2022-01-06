import mongoose from "mongoose";

const task = new mongoose.Schema({
  folder: { type: String, required: true },
  task: { type: String, required: true },
  user: { type: String, required: true },
  done: { type: Boolean },
});

module.exports = mongoose.models.TASKS || mongoose.model("TASKS", task);

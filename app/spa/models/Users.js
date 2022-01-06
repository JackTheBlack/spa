import mongoose from "mongoose";

const users = new mongoose.Schema({
  email: { type: String, required: false },
  password: { type: String, required: false },

  userName: { type: String, required: true, unique: true },
});

const folder = new mongoose.Schema({
  folder: { type: String, required: true },

  user: { type: String, required: true },
});

const tasks = new mongoose.Schema({
  folder: { type: String, required: true },
  task: { type: String, required: true },
  user: { type: String, required: true },
});

module.exports = mongoose.models.USERS || mongoose.model("USERS", users);
//module.exports = mongoose.models.FOLDERS || mongoose.model("FOLDERS", folder);
//module.exports = mongoose.models.TASKS || mongoose.model("TASKS", tasks);

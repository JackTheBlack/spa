import mongoose from "mongoose";

const folder = new mongoose.Schema({
  folder: { type: String, required: true },

  user: { type: String, required: true },
});

//module.exports = mongoose.models.USERS || mongoose.model("USERS", users);
module.exports = mongoose.models.FOLDERS || mongoose.model("FOLDERS", folder);
//module.exports = mongoose.models.TASKS || mongoose.model("TASKS", tasks);

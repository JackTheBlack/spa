import dbConnect from "../../utils/dbConnection";

import TASKS from "../..//models/Tasks";
import FOLDERS from "../..//models/folders";

dbConnect();

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const tasks = await TASKS.find();
        res.status(200).json({ succes: true, data: tasks });
      } catch (error) {
        res.status(400).json({ succes: false });
      }
      break;
    case "POST":
      try {
        console.log(req.body);
        const { folder } = req.body;
        console.log("estoy aqui");
        const foler = await FOLDERS.deleteOne({ folder: folder });
        const tasks = await TASKS.deleteMany({ folder: folder });
        console.log(tasks);
        res.status(201).json({ succes: true });
      } catch (error) {
        res.status(400).json({ succes: false });
      }
  }

  res.json({ name: "John Doe" });
}

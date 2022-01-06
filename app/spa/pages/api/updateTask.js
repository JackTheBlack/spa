import dbConnect from "../../utils/dbConnection";

import TASKS from "../..//models/Tasks";

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
        const { id, task } = req.body;
        console.log(task);
        const tasks = await TASKS.updateOne(
          { _id: id },
          { $set: { task: task } }
        );
        console.log(tasks);
        res.status(201).json({ succes: true });
      } catch (error) {
        res.status(400).json({ succes: false });
      }
  }

  res.json({ name: "John Doe" });
}

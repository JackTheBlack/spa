// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import dbConnect from "../../Backend/utils/dbConnection";

import TASKS from "../../Backend/models/Tasks";
import { updateCheckTaskService } from "../../Backend/service/taskService";

dbConnect();

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "GET":
      res.json("Update check Task");
      break;
    case "POST":
      const { done, id } = req.body;
      console.log(req.body);
      var data = await updateCheckTaskService(id, done);
      res.json(data.data);
  }

  res.json({ name: "John Doe" });
}

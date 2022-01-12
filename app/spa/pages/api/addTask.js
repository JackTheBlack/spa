// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { addTaskService } from "../../Backend/service/taskService";

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "GET":
      res.json("add task");
      break;
    case "POST":
      console.log(req.body);
      const { user, folder, task } = req.body;
      var data = await addTaskService(user, folder, task);
      res.json(data);
  }
}

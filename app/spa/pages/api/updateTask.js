// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { updateTaskService } from "../../Backend/service/taskService";

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "GET":
      res.json("update Task");
      break;
    case "POST":
      console.log(req.body);
      const { id, task } = req.body;
      var data = await updateTaskService(id, task);
      res.json(data.data);
  }

  res.json({ name: "John Doe" });
}

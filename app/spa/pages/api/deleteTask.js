// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { deleteTaskService } from "../../Backend/service/taskService";

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "GET":
      res.json({ message: "delete task" });
      break;
    case "POST":
      const { id } = req.body;
      console.log(id);
      var data = await deleteTaskService(id);
      res.json(data);
  }

  res.json({ name: "John Doe" });
}

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import taskService from "../../Backend/service/taskService";

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "GET":
      res.json("get Tasks");
      break;
    case "POST":
      console.log(req.body);
      const { user, folder } = req.body;
      var data = await taskService(user, folder);
      res.json(data);
  }
}

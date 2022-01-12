// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import userService from "../../Backend/service/userService";

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "GET":
      res.json({ method: "get" });

      break;
    case "POST":
      const { password, userName } = req.body;
      const data = await userService(userName, password);
      console.log(data);
      res.json({ succes: true, data: data });
  }
}

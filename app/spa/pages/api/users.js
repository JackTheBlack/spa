// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import dbConnect from "../../utils/dbConnection";
import USERS from "../../models/Users";

dbConnect();

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const users = await USERS.find();
        res.status(200).json({ succes: true, data: users });
      } catch (error) {
        res.status(400).json({ succes: false });
      }
      break;
    case "POST":
      try {
        console.log(req.body);
        const { password, userName } = req.body;
        const user = await USERS.find({
          userName: userName,
          password: password,
        });
        console.log(user);
        res.status(201).json({ succes: true, data: user });
      } catch (error) {
        res.status(400).json({ succes: false });
      }
  }

  res.json({ name: "John Doe" });
}

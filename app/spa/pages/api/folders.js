// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import dbConnect from "../../utils/dbConnection";

import FOLDERS from "../../models/Folders";

dbConnect();

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const folder = await FOLDERS.find();
        res.status(200).json({ succes: true, data: folder });
      } catch (error) {
        res.status(400).json({ succes: false });
      }
      break;

    case "POST":
      try {
        console.log(req.body);
        const { user } = req.body;
        const folder = await FOLDERS.find({
          user: user,
        });
        console.log(folder);
        res.status(201).json({ succes: true, data: folder });
      } catch (error) {
        res.status(400).json({ succes: false });
      }
  }

  res.json({ name: "John Doe" });
}

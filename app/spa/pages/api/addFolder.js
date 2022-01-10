import dbConnect from "../../utils/dbConnection";

import FOLDERS from "../..//models/Folders";

dbConnect();

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const folders = await FOLDERS.find();
        res.status(200).json({ succes: true, data: folders });
      } catch (error) {
        res.status(400).json({ succes: false });
      }
      break;
    case "POST":
      try {
        const { user, folder } = req.body;
        console.log("estoy aqui");
        const folders = await FOLDERS.create({
          user: user,
          folder: folder,
        });

        res.status(201).json({ succes: true, data: folder.data });
      } catch (error) {
        res.status(400).json({ succes: false });
      }
  }
}

import { deleteFolderService } from "../../Backend/service/folderService";

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "GET":
      res.json("delete folder");
      break;
    case "POST":
      console.log(req.body);
      const { folder, user } = req.body;
      var data = await deleteFolderService(user, folder);
      res.json({ succes: true });
  }
}

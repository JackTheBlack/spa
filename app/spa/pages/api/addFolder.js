import { addFolderService } from "../../Backend/service/folderService";

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "GET":
      res.json("get en folders");
      break;
    case "POST":
      const { user, folder } = req.body;
      var data = await addFolderService(user, folder);
      console.log(data);
      res.json(data);
  }
}

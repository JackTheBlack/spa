import folderService from "../../Backend/service/folderService";

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "GET":
      res, json("get folders");
      break;

    case "POST":
      const { user } = req.body;
      console.log(user);
      var data = await folderService(user);
      console.log(data);
      res.json(data);
  }

  res.json({ name: "John Doe" });
}

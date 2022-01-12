import dbConnect from "../utils/dbConnection";

import FOLDERS from "../models/Folders";
import { deleteAllTaskService } from "./TaskService";
dbConnect();

export default async function folderService(user) {
  try {
    console.log(user);
    const folder = await FOLDERS.find({
      user: user,
    });
    console.log(folder);
    return { succes: true, data: folder };
  } catch (error) {
    return { succes: false };
  }
}

export const addFolderService = async (user, folder) => {
  try {
    console.log("estoy aqui");
    const folders = await FOLDERS.create({
      user: user,
      folder: folder,
    });

    return { succes: true, data: folder.data };
  } catch (error) {
    return { succes: false };
  }
};

export const deleteFolderService = async (user, folder) => {
  try {
    console.log("estoy aqui");
    const foler = await FOLDERS.deleteOne({ user: user, folder: folder });
    var deleteTasks = await deleteAllTaskService(user, folder);
    return { succes: true };
  } catch (error) {
    return { succes: false };
  }
};

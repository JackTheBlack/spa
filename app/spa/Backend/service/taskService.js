import dbConnect from "../utils/dbConnection";
import TASKS from "../models/Tasks";
dbConnect();

export default async function taskService(user, folder) {
  try {
    console.log(user);
    const task = await TASKS.find({
      user: user,
      folder: folder,
    });
    return { succes: true, data: task };
  } catch (error) {
    return { succes: false };
  }
}

export const addFolderService = async (user, folder, task) => {
  try {
    console.log("estoy aqui");
    const task = await TASKS.create({
      user: user,
      folder: folder,
      task: task,
      done: false,
    });

    return { succes: true, data: task.data };
  } catch (error) {
    return { succes: false };
  }
};

export const deleteTaskService = async (id) => {
  try {
    console.log("estoy arriba de deleteOne");
    const task = await TASKS.deleteOne({ _id: id });
    return { succes: true };
  } catch (error) {
    return { succes: false };
  }
};

export const updateTaskService = async (id, task) => {
  try {
    const tasks = await TASKS.updateOne({ _id: id }, { $set: { task: task } });
    console.log(tasks);
    return { succes: true, data: tasks.data };
  } catch (error) {
    return { succes: false };
  }
};

export const updateCheckTaskService = async (id, done) => {
  try {
    const tasks = await TASKS.updateOne({ _id: id }, { $set: { done: done } });
    console.log(tasks);
    return { succes: true };
  } catch (error) {
    return { succes: false };
  }
};

export const deleteAllTaskService = async (user, folder) => {
  try {
    console.log("estoy arriba de deleteOne");
    const tasks = await TASKS.deleteMany({ folder: folder, user: user });
    return { succes: true };
  } catch (error) {
    return { succes: false };
  }
};

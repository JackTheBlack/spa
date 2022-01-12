import dbConnect from "../utils/dbConnection";

import USERS from "../models/Users";

dbConnect();

export default async function userService(username, password) {
  try {
    const user = await USERS.find({
      userName: username,
      password: password,
    });
    // console.log(user[0]);
    return user[0];
  } catch (error) {
    return error;
  }
}

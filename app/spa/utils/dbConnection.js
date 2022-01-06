import mongoose from "mongoose";

const connection = {};

async function dbConnect() {
  const user = "jack";
  const password = "1234";
  const dbName = "api_db";

  if (connection.isConnected) {
    return;
  }

  const db = await mongoose.connect(
    `mongodb+srv://jack:${password}@cluster0.z70zv.mongodb.net/${dbName}?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  );

  connection.isConnected = db.connections[0].readyState;
  console.log(connection.isConnected);
}

export default dbConnect;

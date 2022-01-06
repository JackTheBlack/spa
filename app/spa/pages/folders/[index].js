import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import "antd/dist/antd.css";
import axios from "axios";
import Cookies from "js-cookie";

export default function Folders() {
  const router = useRouter();
  const [newFolder, setNewFolder] = useState();
  var username = Cookies.get("token");
  const [folders, setFolders] = useState([]);

  const getFolders = async () => {
    try {
      let payload = { user: username };
      let res = await axios.post("../api/folders", payload);
      let data = res.data;
      console.log(data);

      setFolders([...res.data.data]);
      console.log(folders);
    } catch (e) {
      console.log("fallo");
      console.log(e);
    }
  };

  const handleOpen = (tasks) => {
    Cookies.set("folderToken", tasks);
    Cookies.set("userToken", username);

    router.push("/toDoList");
  };

  useEffect(() => {
    getFolders();
  }, []);

  const handleOnChange = (event) => {
    setNewFolder(event.target.value);
  };

  const handleSubmit = async () => {
    if (newFolder !== "") {
      try {
        let payload = { user: username, folder: newFolder };
        let res = await axios.post("../api/addFolder", payload);

        console.log(data);
      } catch (e) {
        console.log("fallo");
        console.log(e);
      }
    }
    getFolders();
  };

  return (
    <>
      <h1>Folders</h1>
      <table className="Table">
        <tr>
          <th> </th>
          <th></th>
          <th> </th>
        </tr>

        {folders.map((folder, index) => (
          <tr key={index}>
            <td> {folder.folder} </td>
            <td>
              <button
                className="btn btn-link"
                onClick={() => console.log("delete")}
              >
                {" "}
                Delete
              </button>{" "}
            </td>

            <td>
              {" "}
              <button
                className="btn btn-link"
                onClick={() => handleOpen(folder.folder)}
              >
                Open
              </button>{" "}
            </td>
          </tr>
        ))}
      </table>
      <p>
        {" "}
        New Folder <input
          type="text"
          name="item"
          onChange={handleOnChange}
        />{" "}
      </p>

      <button onClick={() => handleSubmit()}>Ok</button>
    </>
  );
}

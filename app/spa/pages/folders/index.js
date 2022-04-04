import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import "antd/dist/antd.css";
import axios from "axios";
import Cookies from "js-cookie";

export default function Folders() {
  const router = useRouter();
  const [newFolder, setNewFolder] = useState();
  const { username } = router.query;
  console.log(" dfdf", router.query);
  const [folders, setFolders] = useState([]);
  const [loaded,setLoaded]=useState(false);


  const logOut = () => {
    Cookies.remove("token");
    router.push("/");
  };

  const getFolders = async () => {
    try {
      const payload = { user: username };
     console.log("este es el payload ",payload);
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
   
    if(!loaded){
      getFolders();
      if(username!==undefined){
        setLoaded(true);
      }
  
    }

    if (username === null) {
      route.push("/");
    }
  });

  const handleOnChange = (event) => {
    setNewFolder(event.target.value);
  };

  const handleSubmit = async () => {
    if (newFolder !== "") {
      try {
        let payload = { user: username, folder: newFolder };
        let res = await axios.post("../api/addFolder", payload);
        var data = res.data;
      } catch (e) {
        console.log("fallo");
        console.log(e);
      }
    }
    getFolders();
  };

  const handleDelete = async (f, index) => {
    try {
      let payload = { folder: f, user: username };
      let res = await axios.post("../api/deleteFolder", payload);
      let data = res.data;
      console.log(data);
    } catch (e) {
      console.log("fallo");
      console.log(e);
    }
    var aux = folders;
    var removed = aux.splice(index, 1);
    setFolders([...aux]);
  };

  return (
    <>
      {username !== null ? (
        <div>
          <h1>Folders: {username} </h1>
          <table className="Table">
            <tr>
              <th> </th>
              <th></th>
              <th> </th>
            </tr>
            <tbody>
              {folders.map((folder, index) => (
                <tr key={index}>
                  <td> {folder.folder} </td>
                  <td>
                    <button
                      className="btn btn-link"
                      onClick={() => handleDelete(folder.folder, index)}
                    >
                      {" "}
                      Delete
                    </button>{" "}
                  </td>

                  <td>
                    {" "}
                    <button
                      className="btn btn-link"
                      onClick={() => handleOpen(folder.folder, index)}
                    >
                      Open
                    </button>{" "}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p>
            {" "}
            New Folder{" "}
            <input type="text" name="item" onChange={handleOnChange} />{" "}
          </p>

          <button onClick={() => handleSubmit()}>Ok</button>
          <div>
            <button className="btn btn-danger" onClick={() => logOut()}>
              LogOut
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}

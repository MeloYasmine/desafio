import api from "./api";
import axios from "axios";
import React, { useState, Component, useEffect } from "react";
import BasicTable from "../components/BasicTable";
import { TableCell } from "@material-ui/core";

function ApiManager(props) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    api
      .get("")
      .then((res) => {
        //console.log(Object.values(Object.entries(res.data)));
        setPosts(Object.values(Object.entries(res.data)));
      })
      .catch((err) => {
        console.log(err);
      });
  },
[]);
  return (
    <div>
      <BasicTable teste={posts}/>
     
    </div>
  );
}

export default ApiManager;

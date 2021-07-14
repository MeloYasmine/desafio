/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import BasicTable from '../components/BasicTable';
import api from './api';

function ApiManager(props) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    api
      .get('')
      .then((res) => {
        // console.log(Object.values(Object.entries(res.data)));
        setPosts(Object.values(Object.entries(res.data)));
      })
      .catch((err) => {
        console.log(err);
      });
  },
  []);
  return (
    <div>
      <BasicTable teste={posts} />

    </div>
  );
}

export default ApiManager;

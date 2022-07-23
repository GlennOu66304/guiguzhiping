import React, { useEffect, useState } from "react";
import "./profile.css";

import axios from "axios";
import { useParams } from "react-router-dom";

export default function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER + "/";
  const [user, setUser] = useState({});
  const username = useParams().username;

  // useEffect(() => {
  //   const FetchUser = async () => {
  //     const res = await axios.get(`/users/?username=${username}`);
  //     setUser(res.data);
  //   };
  //   FetchUser();
  // }, [username]);
  return (
    <>
      <div className="profile">
        <h2>this is the profile page</h2>
      </div>
    </>
  );
}

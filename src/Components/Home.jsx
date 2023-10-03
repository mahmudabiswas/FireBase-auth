import React, { useContext } from "react";
import { AuthContext } from "../AuthProjects/AuthProvider";

const Home = () => {
  const authInfo = useContext(AuthContext);
  console.log(authInfo, "click");
  return <div>Home</div>;
};

export default Home;

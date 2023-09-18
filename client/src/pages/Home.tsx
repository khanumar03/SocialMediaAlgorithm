import React from "react";
import { signout } from "../firebase/utils";

const Home = () => {
  return (
    <div>
      <button onClick={signout}>signout</button>
    </div>
  );
};

export default Home;

import React from "react";
import { signin } from "../firebase/utils";

export const Authentication = () => {
  return (
    <div>
      <button onClick={signin}>signin</button>
    </div>
  );
};

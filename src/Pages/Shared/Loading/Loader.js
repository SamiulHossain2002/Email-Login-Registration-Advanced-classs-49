import React from "react";
import loadingImage from "../../../Asset/Images/loadingImage.gif";
const Loader = () => {
  return (
    <div className="flex items-center h-screen justify-center">
      <img src={loadingImage} alt="" />
    </div>
  );
};

export default Loader;

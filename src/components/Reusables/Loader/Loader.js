import React from "react";
import PropsTypes from "prop-types";
import { useSelector } from "react-redux";
import loadingBar from "./image/loading.gif";

const Loader = () => {
  const loading = useSelector((state) => state.auth.loading);
  return loading ? (
    <div className="loader">
      <img src={loadingBar} alt="" />
      <span className="text-dark ml-2">Please wait ...</span>
    </div>
  ) : null;
};

Loader.propsTypes = {
  loading: PropsTypes.bool.isRequired,
};

export default Loader;

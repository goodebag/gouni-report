import React from "react";
import PropsTypes from "prop-types";
import { useSelector } from "react-redux";

function Loader() {
    const loading = useSelector(state => state.auth.loading);
    return (
        loading
            ? <div className="loader">
                <span className="text-dark ml-2">Please wait ...</span>
              </div>
            : null
    );
}

Loader.propsTypes = {
    loading: PropsTypes.bool.isRequired
};

export default Loader;
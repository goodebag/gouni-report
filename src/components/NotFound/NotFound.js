import React from 'react';
import { createBrowserHistory } from "history";

const NotFound = () => {

    const handleRouteChange = () => {
        createBrowserHistory().push("/");
        createBrowserHistory().go(0);
    }

    return (
        <div className="error-box">
            <div className="error-body text-center">
                <h1 className="error-title text-primary">404</h1>
                <h3 className="text-uppercase error-subtitle">PAGE NOT FOUND !</h3>
                <p className="mt-4 mb-4">YOU SEEM TO BE TRYING TO FIND HIS WAY HOME</p>
                <button 
                    type="button" 
                    className="btn btn-primary btn-rounded" 
                    onClick={() => handleRouteChange()}>
                    Back to home
                </button>
            </div>
        </div>
    )
}

export default NotFound;
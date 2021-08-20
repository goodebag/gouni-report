import React from "react";
import Header from "../Reusables/Header/Header";
import SideBar from "../SideBar/SideBar";
import UnadmittedCandidate from "./UnadmittedCandidate";

function index() {
    return (
        <div>
            <Header />
            <SideBar />
            <UnadmittedCandidate />
        </div>
    );
}

export default index;
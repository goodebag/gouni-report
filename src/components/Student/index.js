import React from "react";
import Header from "../Reusables/Header/Header";
import SideBar from "../SideBar/SideBar";
import Student from "./Student";

function index() {
    return (
        <div>
            <Header />
            <SideBar />
            <Student />
        </div>
    );
}

export default index;
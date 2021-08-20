import React from "react";
import Header from "../Reusables/Header/Header";
import SideBar from "../SideBar/SideBar";
import RegisterStudent from "./RegisterStudent";

function index() {
    return (
        <div>
            <Header />
            <SideBar />
            <RegisterStudent />
        </div>
    );
}

export default index;
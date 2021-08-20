import React from "react";
import Header from "../Reusables/Header/Header";
import SideBar from "../SideBar/SideBar";
import MainContent from "./MainContent";

function index() {
    return (
        <div>
            <Header />
            <SideBar />
            <MainContent />
        </div>
    );
}

export default index;
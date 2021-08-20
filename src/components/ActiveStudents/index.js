import React from "react";
import Header from "../Reusables/Header/Header";
import SideBar from "../SideBar/SideBar";
import ActiveStudents from "./ActiveStudents";

function index() {
    return (
        <div>
            <Header />
            <SideBar />
            <ActiveStudents />
        </div>
    );
}

export default index;
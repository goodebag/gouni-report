import React from "react";
import Header from "../Reusables/Header/Header";
import SideBar from "../SideBar/SideBar";
import StudentPayment from "./StudentPayment";

function index() {
    return (
        <div>
            <Header />
            <SideBar />
            <StudentPayment />
        </div>
    );
}

export default index;
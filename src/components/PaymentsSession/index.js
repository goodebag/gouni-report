import React from "react";
import Header from "../Reusables/Header/Header";
import SideBar from "../SideBar/SideBar";
import PaymentsSession from "./PaymentsSession";

function index() {
    return (
        <div>
            <Header />
            <SideBar />
            <PaymentsSession />
        </div>
    );
}

export default index;
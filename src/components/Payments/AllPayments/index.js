import React from "react";
import Header from "../../Reusables/Header/Header";
import SideBar from "../../SideBar/SideBar";
import AllPayments from "./AllPayments";

function index() {
  return (
    <div>
      <Header />
      <SideBar />
      <AllPayments />
    </div>
  );
}

export default index;

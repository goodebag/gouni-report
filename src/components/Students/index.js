import React from "react";
import Header from "../Reusables/Header/Header";
import SideBar from "../SideBar/SideBar";
import Students from "./Students";

function index() {
  return (
    <div>
      <Header />
      <SideBar />
      <Students />
    </div>
  );
}

export default index;

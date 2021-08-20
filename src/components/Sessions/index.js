import React from "react";
import Header from "../Reusables/Header/Header";
import SideBar from "../SideBar/SideBar";
import Sessions from "./Sessions";

function index() {
  return (
    <div>
      <Header />
      <SideBar />
      <Sessions />
    </div>
  );
}

export default index;

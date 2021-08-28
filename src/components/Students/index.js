import React from "react";
import Header from "../Reusables/Header/Header";
import SideBar from "../SideBar/SideBar";
import Students from "./Students";

const index = () => {
  return (
    <>
      <Header />
      <SideBar />
      <Students />
    </>
  );
};

export default index;

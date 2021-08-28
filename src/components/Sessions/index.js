import React from "react";
import Header from "../Reusables/Header/Header";
import SideBar from "../SideBar/SideBar";
import Sessions from "./Sessions";

const index = () => {
  return (
    <>
      <Header />
      <SideBar />
      <Sessions />
    </>
  );
};

export default index;

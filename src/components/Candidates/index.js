import React from "react";
import Header from "../Reusables/Header/Header";
import SideBar from "../SideBar/SideBar";
import Candidates from "./Candidates";

const index = () => {
  return (
    <>
      <Header />
      <SideBar />
      <Candidates />
    </>
  );
};

export default index;

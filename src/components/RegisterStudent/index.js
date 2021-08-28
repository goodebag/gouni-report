import React from "react";
import Header from "../Reusables/Header/Header";
import SideBar from "../SideBar/SideBar";
import RegisterStudent from "./RegisterStudent";

const index = () => {
  return (
    <>
      <Header />
      <SideBar />
      <RegisterStudent />
    </>
  );
};

export default index;

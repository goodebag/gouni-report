import React from "react";
import Header from "../Reusables/Header/Header";
import SideBar from "../SideBar/SideBar";
import UnadmittedCandidate from "./UnadmittedCandidate";

const index = () => {
  return (
    <>
      <Header />
      <SideBar />
      <UnadmittedCandidate />
    </>
  );
};

export default index;

import React from "react";
import Header from "../Reusables/Header/Header";
import SideBar from "../SideBar/SideBar";
import CandidateForm from "./CandidateForm";

const index = () => {
  return (
    <>
      <Header />
      <SideBar />
      <CandidateForm />
    </>
  );
};

export default index;

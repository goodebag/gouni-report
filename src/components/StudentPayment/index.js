import React from "react";
import Header from "../Reusables/Header/Header";
import SideBar from "../SideBar/SideBar";
import StudentPayment from "./StudentPayment";

const index = () => {
  return (
    <>
      <Header />
      <SideBar />
      <StudentPayment />
    </>
  );
};

export default index;

import React from "react";
import Header from "../Reusables/Header/Header";
import SideBar from "../SideBar/SideBar";
import DashboardContainer from "./DashboardContainer";

const index = () => {
  return (
    <>
      <Header />
      <SideBar />
      <DashboardContainer />
    </>
  );
};

export default index;

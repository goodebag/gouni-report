import React from "react";
import Header from "../../Reusables/Header/Header";
import SideBar from "../../SideBar/SideBar";
import OfflinePayment from "./OfflinePayment";

function index() {
  return (
    <div>
      <Header />
      <SideBar />
      <OfflinePayment />
    </div>
  );
}

export default index;

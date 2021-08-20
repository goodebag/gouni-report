import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createBrowserHistory } from "history";

import UtilityService from "../../utils/UtilityServices";
import { RoleConst } from "../../constants/RoleConstant";
import UnderGraduateChart from "./UnderGraduateChart";
import PostGraduateChart from "./PostGraduateChart";
import UnderGraduateColumn from "./UnderGraduateColumn";
import PostGraduateColumn from "./PostGraduateColumn";
import { getAllSession } from "../../redux/actions/authAction";

function MainContent() {
  useEffect(() => {
    let isUserQualified = UtilityService.IsUserQualifiedForRole([
      RoleConst.ADMIN,
    ]);
    if (isUserQualified === false) {
      localStorage.removeItem("access");
      createBrowserHistory().push("/login");
      createBrowserHistory().go();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const dispatch = useDispatch();

  const allSession = useSelector((state) => state.auth.allSession);

  useEffect(() => {
    dispatch(getAllSession());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [selectedOption, setSelectedOption] = useState("");

  const onSelectedChanged = (e) => setSelectedOption(e.target.value);

  let filteredData = allSession.filter(
    (session) => session.sessionName === selectedOption
  );

  let initialData = {
    session_Id: 0,
    session_Name: "",
    activated: true,
    adminting: true,
  };

  if (filteredData[0] !== undefined) {
    let { sessionId, sessionName } = filteredData[0];
    let dataObj = {
      session_Id: sessionId,
      session_Name: sessionName,
      activated: true,
      adminting: true,
    };
    initialData = dataObj;
  }

  return (
    <div className="page-wrapper">
      <div className="row">
        <div className="col-lg-12">
          <div className="card shadow-sm mb-0">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <h2 className="text-primary mb-0">Dashboard</h2>
                <div className="ml-auto">
                  <select
                    className="select-dropdown"
                    onChange={onSelectedChanged}
                  >
                    <option>Select Session</option>
                    {allSession.map((session, index) => (
                      <option key={index} value={session.id}>
                        {session.sessionName}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <UnderGraduateColumn data={initialData} />
          <PostGraduateColumn data={initialData} />
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="card border__radius_20 shadow-sm">
              <div className="card-body">
                <div className="row">
                  <div className="col-12">
                    <div className="d-flex flex-wrap">
                      <h3 className="card-title">Undergraduate Overview</h3>
                    </div>
                  </div>
                  <div className="col-12">
                    <UnderGraduateChart data={initialData} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="card border__radius_20 shadow-sm">
              <div className="card-body">
                <div className="row">
                  <div className="col-12">
                    <div className="d-flex flex-wrap">
                      <h3 className="card-title">Postgraduate Overview</h3>
                    </div>
                  </div>
                  <div className="col-12">
                    <PostGraduateChart data={initialData} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainContent;

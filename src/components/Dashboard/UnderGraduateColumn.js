import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import icon1 from "./image/quality.svg";
import icon2 from "./image/find.svg";
import icon3 from "./image/visibility.svg";

import {
  getActiveStudentsNumberBySession,
  getTotalNumberOfAdmissionSeekers,
  getConvertedStudentsBySession,
  getActiveStudentsByProgramme,
  getStudentAdmissionSeekersByProgram,
} from "../../redux/actions/authAction";
import ModalTable from "./ModalTable";

const UnderGraduateColumn = (props) => {
  const activeStudentsNumberBySession = useSelector(
    (state) => state.auth.activeStudentsNumberBySession
  );

  const totalNumberOfAdmissionSeekers = useSelector(
    (state) => state.auth.totalNumberOfAdmissionSeekers
  );

  const convertedStudentsBySession = useSelector(
    (state) => state.auth.convertedStudentsBySession
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getActiveStudentsNumberBySession(props.data));
    dispatch(getTotalNumberOfAdmissionSeekers(props.data));
    dispatch(getConvertedStudentsBySession(props.data));
  }, [dispatch, props.data]);

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  const handleGetActiveStudents = () => {
    const data = {
      sessionId: 0,
      sessionName: "",
      activated: true,
      adminting: true,
      programmeId: 14,
    };

    dispatch(getActiveStudentsByProgramme(data));
    setTimeout(() => {
      openModal();
    }, 800);
  };

  const handleGetAdmissionSeekers = () => {
    const data = {
      sessionId: 0,
      sessionName: "",
      activated: true,
      adminting: true,
      programmeId: 14,
    };

    dispatch(getStudentAdmissionSeekersByProgram(data));
    setTimeout(() => {
      openModal();
    }, 800);
  };

  return (
    <>
      <ModalTable modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
      <div className="col-lg-4 col-md-6 col-sm-12">
        <div
          className="card border__radius_20 shadow-sm"
          onClick={() => handleGetActiveStudents()}
          style={{ cursor: "pointer" }}
        >
          <div className="card-body d-flex align-items-center">
            <div className="">
              <img src={icon1} alt="" className="img__card" />
            </div>
            <div className="pl-4">
              <h4 className="card-title mb-0">Admitted Candidate</h4>
              <div className="d-flex align-items-center">
                <h2 className="card-text text-primary pt-2">
                  {activeStudentsNumberBySession.underGraduateCount}
                </h2>
                <span className="badge badge-primary bg-primary py-1 ml-auto">
                  Undergraduate
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-12">
        <div
          className="card border__radius_20 shadow-sm"
          onClick={() => handleGetAdmissionSeekers()}
          style={{ cursor: "pointer" }}
        >
          <div className="card-body d-flex align-items-center">
            <div className="">
              <img src={icon2} alt="" className="img__card" />
            </div>
            <div className="pl-4">
              <h4 className="card-title mb-0">Unadmitted Candidate</h4>
              <div className="d-flex align-items-center">
                <h2 className="card-text text-primary pt-2">
                  {totalNumberOfAdmissionSeekers.totalCount}
                </h2>
                <span className="badge badge-primary bg-primary py-1 ml-auto">
                  Undergraduate
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-12">
        <div className="card border__radius_20 shadow-sm">
          <div className="card-body d-flex align-items-center">
            <div className="">
              <img src={icon3} alt="" className="img__card" />
            </div>
            <div className="pl-4">
              <h4 className="card-title mb-0">Converted Candidates</h4>
              <div className="d-flex align-items-center">
                <h2 className="card-text text-primary pt-2">
                  {convertedStudentsBySession.underGraduateCount}
                </h2>
                <span className="badge badge-primary bg-primary py-1 ml-auto">
                  Undergraduate
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UnderGraduateColumn;

import React, { useEffect, useCallback } from "react";
import { Doughnut } from "react-chartjs-2";
import { useSelector, useDispatch } from "react-redux";

import {
  getActiveStudentsNumberBySession,
  getTotalNumberOfAdmissionSeekers,
  getConvertedStudentsBySession,
} from "../../redux/actions/authAction";

const PostGraduateChart = (props) => {
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

  const handleData = useCallback(async () => {
    await dispatch(getActiveStudentsNumberBySession(props.data));
    await dispatch(getTotalNumberOfAdmissionSeekers(props.data));
    await dispatch(getConvertedStudentsBySession(props.data));
  }, [dispatch]);

  useEffect(() => {
    handleData();
  }, [dispatch, handleData]);

  const data = {
    labels: [
      "Admitted Candidate",
      "UnAdmitted Candidate",
      "Converted Candidates",
    ],
    datasets: [
      {
        label: "My First Dataset",
        data: [
          activeStudentsNumberBySession.postGraduateCount,
          totalNumberOfAdmissionSeekers.postGraduateCount,
          convertedStudentsBySession.postGraduateCount,
        ],
        backgroundColor: [
          "rgb(61, 103, 202)",
          "rgb(239, 48, 97)",
          "rgb(65, 217, 93)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div>
      <Doughnut
        data={data}
        options={{
          responsive: true,
          maintainAspectRatio: false,
        }}
      />
    </div>
  );
};

export default PostGraduateChart;

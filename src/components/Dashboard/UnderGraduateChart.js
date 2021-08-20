import React, { useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import { useSelector, useDispatch } from "react-redux";

import {
  getActiveStudentsNumberBySession,
  getTotalNumberOfAdmissionSeekers,
  getConvertedStudentsBySession,
} from "../../redux/actions/authAction";

function UnderGraduateChart(props) {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
          activeStudentsNumberBySession.underGraduateCount,
          totalNumberOfAdmissionSeekers.totalCount,
          convertedStudentsBySession.underGraduateCount,
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
}

export default UnderGraduateChart;

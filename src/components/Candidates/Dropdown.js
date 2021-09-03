import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getActiveStudents } from "../../redux/actions/authAction";

const Dropdown = () => {
  const [selectedSession, setSelectedSession] = useState({
    session_Id: 0,
    session_Name: "",
    activated: true,
    adminting: true,
  });

  const onSelectedChanged = (e) => setSelectedSession(e.target.value);

  const sessions = [
    {
      session_Id: 1,
      session_Name: "2010/2011",
      activated: false,
      adminting: false,
    },
    {
      session_Id: 2,
      session_Name: "2011/2012",
      activated: false,
      adminting: false,
    },
    {
      session_Id: 3,
      session_Name: "2012/2013",
      activated: false,
      adminting: false,
    },
    {
      session_Id: 4,
      session_Name: "2013/2014",
      activated: false,
      adminting: false,
    },
    {
      session_Id: 5,
      session_Name: "2014/2015",
      activated: false,
      adminting: false,
    },
    {
      session_Id: 6,
      session_Name: "2015/2016",
      activated: false,
      adminting: false,
    },
    {
      session_Id: 7,
      session_Name: "2016/2017",
      activated: false,
      adminting: false,
    },
    {
      session_Id: 8,
      session_Name: "2017/2018",
      activated: false,
      adminting: false,
    },
    {
      session_Id: 9,
      session_Name: "2018/2019",
      activated: false,
      adminting: false,
    },
    {
      session_Id: 10,
      session_Name: "2019/2020",
      activated: false,
      adminting: false,
    },
    {
      session_Id: 11,
      session_Name: "2020/2021",
      activated: false,
      adminting: false,
    },
    {
      session_Id: 12,
      session_Name: "2021/2022",
      activated: true,
      adminting: true,
    },
  ];

  const filteredSession = sessions.filter(
    (session) => session.session_Name === selectedSession
  );

  const dispatch = useDispatch();

  const handleResult = useCallback(() => {
    if (selectedSession) {
      let eachSession = filteredSession[0];
      dispatch(getActiveStudents(eachSession ? eachSession : selectedSession));
    }
  }, [dispatch, selectedSession]);

  useEffect(() => {
    handleResult();
  }, [handleResult]);

  return (
    <div className="ml-auto">
      <select className="select-dropdown" onChange={onSelectedChanged}>
        {[...sessions].reverse().map((session, index) => (
          <option key={index} value={session.id}>
            {session.session_Name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;

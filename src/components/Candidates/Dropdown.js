import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getActiveStudents } from "../../redux/actions/authAction";

const Dropdown = () => {
  const dispatch = useDispatch();

  const [selectedSession, setSelectedSession] = useState({
    session_Id: 0,
    session_Name: "",
    activated: true,
    adminting: true,
  });

  const onSelectedChanged = (e) => setSelectedSession(e.target.value);

  const sessions = [
    {
      sessionId: 1,
      sessionName: "2010/2011",
      activated: false,
      adminting: false,
    },
    {
      sessionId: 2,
      sessionName: "2011/2012",
      activated: false,
      adminting: false,
    },
    {
      sessionId: 3,
      sessionName: "2012/2013",
      activated: false,
      adminting: false,
    },
    {
      sessionId: 4,
      sessionName: "2013/2014",
      activated: false,
      adminting: false,
    },
    {
      sessionId: 5,
      sessionName: "2014/2015",
      activated: false,
      adminting: false,
    },
    {
      sessionId: 6,
      sessionName: "2015/2016",
      activated: false,
      adminting: false,
    },
    {
      sessionId: 7,
      sessionName: "2016/2017",
      activated: false,
      adminting: false,
    },
    {
      sessionId: 8,
      sessionName: "2017/2018",
      activated: false,
      adminting: false,
    },
    {
      sessionId: 9,
      sessionName: "2018/2019",
      activated: false,
      adminting: false,
    },
    {
      sessionId: 10,
      sessionName: "2019/2020",
      activated: false,
      adminting: false,
    },
    {
      sessionId: 11,
      sessionName: "2020/2021",
      activated: false,
      adminting: false,
    },
    {
      sessionId: 12,
      sessionName: "2021/2022",
      activated: true,
      adminting: true,
    },
  ];

  const filteredSession = sessions.filter(
    (session) => session.sessionName === selectedSession
  );

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
            {session.sessionName}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;

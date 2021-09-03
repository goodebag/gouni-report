import React, { useCallback, useEffect, useState } from "react";
import PropsTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import {
  getAdmissionSeekers,
  getAllSession,
} from "../../redux/actions/authAction";

const Dropdown = () => {
  const [selectedOption, setSelectedOption] = useState({
    session_Id: 0,
    session_Name: "",
    activated: true,
    adminting: true,
  });

  const allSession = useSelector((state) => state.auth.allSession);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllSession());
  }, [dispatch]);

  const onSelectedChanged = (e) => setSelectedOption(e.target.value);

  const filteredSession = allSession.filter(
    (session) => session.sessionName === selectedOption
  );

  const getResult = useCallback(() => {
    if (selectedOption) {
      let eachSession = filteredSession[0];
      dispatch(getAdmissionSeekers(eachSession ? eachSession : selectedOption));
    }
  }, [dispatch, selectedOption]);

  useEffect(() => {
    getResult();
  }, [getResult]);

  return (
    <div className="ml-auto">
      <select className="select-dropdown" onChange={onSelectedChanged}>
        {[...allSession].reverse().map((session, index) => (
          <option key={index} value={session.id}>
            {session.sessionName}
          </option>
        ))}
      </select>
    </div>
  );
};

Dropdown.propsTypes = {
  getAllSession: PropsTypes.func.isRequired,
  allSession: PropsTypes.array.isRequired,
};

export default Dropdown;

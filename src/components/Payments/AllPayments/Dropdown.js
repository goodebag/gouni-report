import React, { useEffect, useState } from "react";
import PropsTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { getPaymentsBySession, getAllSession } from "../../../redux/actions/authAction";

const Dropdown = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllSession());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const allSession = useSelector((state) => state.auth.allSession);

  let [selectedOption, setSelectedOption] = useState({
    session_Id: 0,
    session_Name: "",
    activated: true,
    adminting: true,
  });

  const onSelectedChanged = (e) => setSelectedOption(e.target.value);

  let sessionData = allSession.filter(
    (session) => session.sessionName === selectedOption
  );

  useEffect(() => {
    if (selectedOption) {
      let data = sessionData[0];
      dispatch(getPaymentsBySession(data || selectedOption));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedOption]);

  return (
    <div className="ml-auto">
      <select className="select-dropdown" onChange={onSelectedChanged}>
        <option>Select Session</option>
        {allSession.map((session, index) => (
          <option key={index} value={session.id}>
            {session.sessionName}
          </option>
        ))}
      </select>
    </div>
  );
}

Dropdown.propsTypes = {
  getAllSession: PropsTypes.func.isRequired,
  allSession: PropsTypes.array.isRequired,
};

export default Dropdown;

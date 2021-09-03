import React, { useEffect, useState } from "react";
import PropsTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { getPaymentsBySession, getAllSession } from "../../redux/actions/authAction";

const Dropdown = () => {
  const [isLoading, setIsLoading] = useState(false);

  const allSession = useSelector((state) => state.auth.allSession);

  const [selectedOption, setSelectedOption] = useState();

  const onSelectedChanged = (e) => setSelectedOption(e.target.value);

  let sessionData = allSession.filter(
    (session) => session.sessionName === selectedOption
  );

  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(true)
    dispatch(getAllSession()).then(() => {
      setIsLoading(false)
    })
  }, [dispatch]);

  useEffect(() => {
    if (selectedOption) {
      let data = sessionData[0];
      dispatch(getPaymentsBySession(data || selectedOption));
    }
  }, [dispatch, selectedOption, sessionData]);

  return (
    <div className="ml-auto">
      {isLoading ? <h5 className="mb-0">Loading...</h5> : 
        <select className="select-dropdown" onChange={onSelectedChanged}>
          {[...allSession].reverse().map((session, index) => (
            <option key={index} value={session.id}>
              {session.sessionName}
            </option>
          ))}
        </select>
      }
    </div>
  );
};

Dropdown.propsTypes = {
  getAllSession: PropsTypes.func.isRequired,
  allSession: PropsTypes.array.isRequired,
};

export default Dropdown;
import React from "react";
import { useSelector } from "react-redux";
import { createBrowserHistory } from "history";

const SearchBoxItem = () => {
  const searchStudent = useSelector((state) => state.auth.searchStudent);

  const handleChange = (item) => {
    createBrowserHistory().push(`/student/${item.personId}`);
    createBrowserHistory().go(0);
  };

  let renderItem = (
    <div className="card search-box-item shadow">
      <div className="card-header text-dark border-bottom">
        {searchStudent.length} Candidate Found
      </div>
      <div className="card-list-item">
        {searchStudent.map((item, index) => (
          <ul className="list-group list-group-flush" key={index}>
            <li
              className="list-group-item text-dark"
              style={{ cursor: "pointer" }}
              onClick={() => handleChange(item)}
            >
              <p>
                {item.firstName} {item.lastName}
              </p>
              <small>{item.emailAddress}</small>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );

  if (searchStudent.length < 1) {
    renderItem = null;
  }

  return renderItem;
};

export default SearchBoxItem;

import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { SearchOutlined } from "@ant-design/icons";

import { getSearchStudent } from "../../../redux/actions/authAction";

function SearchBox() {
    const [searchValue, setSearchValue] = useState("");

    const handleChange = event => {
        setSearchValue(event.target.value);
    };

    const dispatch = useDispatch();

    const handleSearch = () => {
        const data = {searchValue};
        if(searchValue) {
            dispatch(getSearchStudent(data));
        }
    }

  return (
      <div className="topbarCenter d-flex justify-content-center">
      <div className="searchbar border-0">
        <input
          type="text"
          placeholder="Search for candidate"
          value={searchValue}
          onChange={handleChange}
          className="searchInput"
        />
        <SearchOutlined className="searchIcon bg-primary shadow-search" onClick={() => handleSearch()} />
      </div>
    </div>
  );
}

export default SearchBox;

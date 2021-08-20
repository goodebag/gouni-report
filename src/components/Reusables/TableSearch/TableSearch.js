import React, { useState, useRef } from "react";
import { useAsyncDebounce } from "react-table";
import { SearchOutlined } from "@ant-design/icons";

function TableSearch({ preGlobalFilteredRows, globalFilter, setGlobalFilter }) {
  const inputRef = useRef(null);
  const count = preGlobalFilteredRows.length;
  const [value, setValue] = useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 200);

  return (
    <div>
      <div
        className="search-bar my-3"
        onClick={() => {
          inputRef.current.select();
        }}
      >
        <input
          ref={inputRef}
          value={value || ""}
          onChange={(e) => {
            setValue(e.target.value);
            onChange(e.target.value);
          }}
          placeholder={`${count} records...`}
        />
        <div className="d-flex justify-content-center">
          <SearchOutlined className="search-icon" />
        </div>
      </div>
    </div>
  );
}

export default TableSearch;

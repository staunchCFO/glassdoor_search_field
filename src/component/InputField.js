import React, { useState } from "react";
import { MdLocationOn } from "react-icons/md";
import { BsSearch } from "react-icons/bs";

import { BodyStyle } from "./style";

const InputField = () => {
  const [search, setSearch] = useState("");

  const clearInput = () => {
    setSearch("");
  };

  return (
    <BodyStyle>
      <h5>Creating an Input Field</h5>
      <div className="parent_inputField">
        <div className="search_div">
          <input
            placeholder="Search for jobs"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="location_div">
          <MdLocationOn className="icon" />
          <input placeholder="Location" />
          {/* {search && (
              
          )} */}
        </div>
        <div className="search_btn">
          <button>
            <BsSearch className="icon" />
          </button>
        </div>
      </div>
    </BodyStyle>
  );
};

export default InputField;

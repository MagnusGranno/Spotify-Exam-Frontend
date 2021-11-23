import React from "react";

const Dropdown = (props) => {
  const dropdownChanged = (e) => {
    props.changed(e.target.value);
  };

  return (
    <div>
      <label>{props.label}</label>
      <select
        value=""
        onChange={dropdownChanged}
        className="form-control form-control-sm col-sm-10"
      >
        <option key={0}>Select Genre</option>
      </select>
    </div>
  );
};

export default Dropdown;

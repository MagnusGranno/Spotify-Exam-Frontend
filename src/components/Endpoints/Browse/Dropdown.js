import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Dropdown = (props) => {
  const dropdownChanged = (e) => {
    props.changed(e.target.value);
  };

  return (
    <div className="col-sm-12 form-group row px-0">
      <label className="form-label col-sm-8 bg-dark text-white">{props.label}</label>
      <select
        value=""
        onChange={dropdownChanged}
        className="form-control form-control-sm col-sm-10 color text-white bg-dark "
      >
        <option key={0}>Select Genre</option>
      </select>
    </div>
  );
};

export default Dropdown;

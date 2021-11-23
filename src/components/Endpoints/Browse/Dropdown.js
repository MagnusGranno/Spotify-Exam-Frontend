import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Dropdown = (props) => {
  const dropdownChanged = (e) => {
    props.changed(e.target.value);
  };

  return (
    <div className="col-sm-12 form-group row px-0">
      <label className="form-label col-sm-2 bg-dark text-white">{props.label}</label>
      <select
        value={props.selectedValue}
        onChange={dropdownChanged}
        className="form-control form-control-sm col-sm-10 bg-dark text-white"
      >
        <option key={0}>Select Genre</option>
        {props.options.map((item, idx) => (
          <option key={idx + 1} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;

import React from "react";
//import "bootstrap/dist/css/bootstrap.min.css";
//import "bootstrap/dist/js/bootstrap.bundle.min";
import styled from "styled-components";

const DivStyler = styled.div`
  position: relative;
  display: inline-block;
  margin-bottom: 18px;
  width: 100%;
  select {
    font-family: "Arial";
    font-size: 18px;
    display: inline-block;
    width: 100%;
    cursor: pointer;
    padding: 8px 18px;
    outline: 0;
    border: 2px solid #000000;
    border-radius: 4px;
    background: #e6e6e6;
    color: #7b7b7b;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
  }
  select::-ms-expand {
    display: none;
  }
  select:hover,
  select:focus {
    color: #000000;
    background: #cccccc;
  }
  select select:disabled {
    opacity: 0.5;
    pointer-events: none;
  }
  select_arrow {
    position: absolute;
    top: 16px;
    right: 15px;
    pointer-events: none;
    border-style: solid;
    border-width: 8px 5px 0px 5px;
    border-color: #7b7b7b transparent transparent transparent;
  }
  select:hover ~ .select_arrow,
  select:focus ~ .select_arrow {
    border-top-color: #000000;
  }
  select:disabled ~ .select_arrow {
    border-top-color: #cccccc;
  }
`;

const Dropdown = (props) => {
  const dropdownChanged = (e) => {
    props.changed(e.target.value);
  };

  return (
    <DivStyler>
      <label>{props.label}</label>
      <select value={props.selectedValue} onChange={dropdownChanged}>
        <option key={0}>Select Genre</option>
        {props.options.map((item, idx) => (
          <option key={idx + 1} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>
    </DivStyler>
  );
};

export default Dropdown;

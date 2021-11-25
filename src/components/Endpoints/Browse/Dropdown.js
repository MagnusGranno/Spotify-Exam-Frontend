import React from 'react';
//import "bootstrap/dist/css/bootstrap.min.css";
//import "bootstrap/dist/js/bootstrap.bundle.min";
import styled from 'styled-components';

const DivStyler = styled.div`
  font-size: var(--fs-400);

  display: inline-block;
  margin: 0 0 0 1rem;
  width: 100%;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  select {
    text-align: center;
    font-size: var(--fs-400);
    display: inline-block;
    width: 100%;
    cursor: pointer;
    padding: 8px 18px;
    outline: 0;
    border: 0px solid #000000;
    border-radius: 12px;
    background: hsl(var(--primary-color));
    color: #fff;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    @media (min-width: 820px) {
      width: minmax(150p, 300px);
    }
    @media (min-width: 1000px) {
      width: minmax(150p, 300px);
    }
  }
  select:-ms-expand {
    display: none;
  }

  select select:disabled {
    opacity: 0.5;
    pointer-events: none;
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

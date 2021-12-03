import styled from 'styled-components';

export const DivStyler = styled.div`
  font-size: var(--fs-400);

  width: 100%;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  select {
    text-align: center;
    font-size: var(--fs-400);
    width: 100%;
    cursor: pointer;
    padding: 8px 10px;
    outline: 0;
    border: 0px solid #000000;
    border-radius: 12px;
    background: hsl(var(--primary-color));
    color: #fff;
    -webkit-appearance: none;
    -moz-appearance: none;
  }
  select:-ms-expand {
    display: none;
  }

  select select:disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`;

import styled from "styled-components";

export const MyBody = styled.div`
  margin-left: 0px;
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  justify-content: space-evenly;
  flex-direction: row;
  grid-template-columns: repeat(2, 200px);
  row-gap: 80px;
  @media (min-width: 929px) {
    grid-template-columns: repeat(4, 200px);
  }
`;

export const Grid = styled.div`
  color: green;
`;

export const DropdownMenu = styled.div`
  margin: auto;
  width: 25%;
  length: 1000px;
  padding: 10px;
  color: 0, 0%, 11%;
  background-color: 122, 39%, 49%;
`;

export const Btn = styled.div`
  background-color: hsl(var(--primary-color));
  color: #fff;
  border: none;
  font-size: 1.2rem;
  border: 0;
  text-align: center;
  text-decoration: none;
  display: flex;
  border-radius: 5px;
  height: 50px;
  width: 100%;
  cursor: pointer;
  box-sizing: border-box;
`;

export const Button = styled.button`
background-color: hsl(var(--primary-color));
color: white;
font-size: 16px;
padding: 8px 29px;
cursor: pointer;
align-items: flex-start;
min-width:100px
`;
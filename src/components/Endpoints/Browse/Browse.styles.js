import styled from "styled-components";

export const MyBody = styled.div`
  margin-left: 0px;
  background-color: #D3D3D3;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const GridContainer = styled.div`
  display: grid;
  text-align: center;
  grid-template-columns: auto auto auto auto;
  justify-content: space-evenly;
  flex-direction: row;
  grid-template-columns: repeat(2, 255px);
  row-gap: 22px;
  @media (min-width: 725px) {
    grid-template-columns: repeat(4, 255px);
  }¨
`;

export const Grid = styled.div`
  color: green;
`;

export const DropdownMenu = styled.div`
  margin: auto;
  width: 25%;
  length: 1000px;
  padding: 4px;
  color: 0, 0%, 11%;
  background-color: 122, 39%, 49%;
`;

export const Btn = styled.div`
  background-color: hsl(var(--primary-color));
  color: #fff;
  border: none;
  text-align: center;
  text-decoration: none;
  display: flex;
  border-radius: 25x;
  height: 50px;
  width: 80%;
  cursor: pointer;
    
`;

export const Button = styled.button`
background-color: hsl(var(--primary-color));
color: white;
padding: 8px;
font-size: 20px;
cursor: pointer;
border-style: solid;
border-width: 1px;
align-items: flex-start;
min-width:126px
`;
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
  grid-template-columns: repeat(2, 300px);
  row-gap: 80px;
  @media (min-width: 929px) {
    grid-template-columns: repeat(4, 300px);
  }
`;

export const Grid = styled.div`
  color: blue;
`;

export const DropdownMenu = styled.div`
  margin: auto;
  width: 25%;
  length: 1000px;
  padding: 10px;
  color: 0, 0%, 11%;
  background-color: 122, 39%, 49%;
`;

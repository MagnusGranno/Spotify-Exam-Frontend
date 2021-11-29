import styled from "styled-components";

export const MyBody = styled.div`
  height: 100%;
  padding-bottom: 2rem;
  padding: 10rem 1rem;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const GridContainer = styled.div`
  z-index: 10;
  display: grid;
  text-align: center;
  justify-content: space-evenly;
  grid-template-columns: repeat(2, minmax(200px, 225px));
  gap: 2rem;
  @media (min-width: 820px) {
    grid-template-columns: repeat(3, minmax(150px, 255px));
  }
  @media (min-width: 1000px) {
    grid-template-columns: repeat(5, minmax(150px, 300px));
  }
  :last-child {
    margin-bottom: 2rem;
  }
`;

export const GridImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 12px 12px 0 0;

  cursor: pointer;
`;

export const Grid = styled.div`
  background-color: hsl(var(--primary-color));
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 12px;
  color: hsl(var(--primary-color));

  display: flex;
  flex-direction: column;
  align-items: center;
  :hover {
    transform: scale(1.1);
  }
  transition-duration: 0.2s;
`;

export const DropdownMenu = styled.div`
  margin: 0 auto;
  margin-bottom: 2rem;
  width: max(20vw, 400px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Btn = styled.div`
  color: #fff;
  display: flex;
  border-radius:0 0 12px 12px;
  overflow: hidden;
  width: 100%;
  max-width: 300px;
`;

export const Button = styled.a`
  background-color: hsl(var(${props => props.bgColor}));
  color: white;
  padding: 1rem;
  font-size: var(--fs-400);
  cursor: pointer;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  :hover {
    background-color: hsl(var(${props => props.hoverColor}), 0.8);
  }
`;
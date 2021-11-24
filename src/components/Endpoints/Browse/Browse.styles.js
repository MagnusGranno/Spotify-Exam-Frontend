import styled from 'styled-components';

export const MyBody = styled.div`
  height: 100%;
  padding-bottom: 2rem;
  padding: 2rem 1rem;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const GridContainer = styled.div`
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
`;

export const Grid = styled.div`
  background-color: white;
  box-shadow: 0px 3px 8px;
  box-shadow: 10px 5px 5px 2pxrgba (0, 0, 0, 0.24);
  border-radius: 12px;
  color: hsl(var(--primary-color));

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DropdownMenu = styled.div`
  margin: 0 auto;
  margin-bottom: 2rem;
  width: max(20vw, 400px);
`;

export const Btn = styled.div`
  color: #fff;
  display: flex;
  border-radius: 12px;
  width: 100%;
  max-width: 300px;
`;

export const LeftButton = styled.button`
  background-color: hsl(var(--primary-color));
  color: white;
  padding: 1rem;
  font-size: var(--fs-400);
  cursor: pointer;
  border: none;
  align-items: flex-start;
  width: 100%;
  border-radius: 0 0 0 12px;

  :hover {
    background-color: hsl(var(--primary-color), 0.8);
  }
`;

export const RightButton = styled.button`
  background-color: hsl(var(--primary-color));
  color: white;
  padding: 8px;
  font-size: var(--fs-400);
  cursor: pointer;
  border: none;
  width: 100%;
  align-items: flex-start;
  border-radius: 0 0 12px 0;
  :hover {
    background-color: hsl(var(--primary-color), 0.8);
  }
`;

import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: hsl(var(--primary-color));
  height: 100px;
  width: 100%;
`;

export const Content = styled.div`
  width: 100%;
  margin: 0 1rem;
  height: 100%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-around;
  h1 {
    font-size: var(--fs-500);
  }

  @media (min-width: 860px) {
    h1 {
      font-size: var(--fs-600);
    }
  }

  @media (min-width: 1000px) {
    h1 {
      font-size: var(--fs-700);
    }
  }
  .header_nav:hover {
    color: #dcdcdd;
  } 
`;

export const Menu = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 1rem;
  align-items: center;
  font-size: var(--fs-300);
  @media (min-width: 860px) {
    font-size: var(--fs-500);
    font-weight: 800;
    gap: 2rem;
  }
  .header_nav:hover {
    color: #dcdcdd;
  }

  .line {
    width: 2px;
    background-color: #fff;
    height: 60%;
  }
`;
export const ProfileLink = styled.div`
  font-size: var(--fs-300);

  @media (min-width: 860px) {
    font-size: var(--fs-500);
  }
  :hover {
    color: #dcdcdd;
  }
  cursor: pointer;
`;
export const StyledLogout = styled.div`
  cursor: pointer;
  text-align: center;
  justify-content: center;

  :hover {
    color: #dcdcdd;
  }
`;

import styled from 'styled-components';

export const MyBody = styled.div`
  height: 100%;
  padding: 8rem 0;
`;

export const DropdownMenu = styled.div`
  margin: 0 auto;
  margin-bottom: 2rem;
  width: max(20vw, 400px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 720px) {
    width: 300px;
  }
`;

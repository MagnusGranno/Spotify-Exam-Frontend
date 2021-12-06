import styled from 'styled-components';

export const AdminWrapper = styled.div`
  background-image: linear-gradient(
    to right bottom,
    #000000,
    #0e0e0e,
    #181818,
    #202020,
    #282828,
    #2c2d31,
    #2d323a,
    #2c3843,
    #133e49,
    #004344,
    #004733,
    #1c4818
  );

  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  margin: 0;
  width: 100%;
  padding-top: 7rem;
  min-height: 100vh;
  padding-bottom: 2rem;

  @media (min-width: 1300px) {
    display: grid;
    grid-template-areas:
      'a b b'
      'c b b';
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 0;
    padding-top: 3rem;
  }
`;

export const AdminStatsContent = styled.div`
  grid-area: a;
  background: transparent;
  display: flex;
  justify-content: center;
`;
export const AdminStatistics = styled.table`
  background: hsl(var(--secondary-color));
  color: white;
  overflow: hidden;
  border-radius: 12px;
  border-collapse: collapse;

  thead h2 {
    border-bottom: 1px solid white;
    letter-spacing: 5px;
    margin: 1rem;
  }

  td,
  th {
    padding: 1rem 2rem;
    font-size: var(--fs-600);
  }
  td {
    padding-bottom: 2rem;

    text-align: center;
  }

  @media (max-width: 720px) {
    td,
    th {
      font-size: var(--fs-400);
    }
  }
`;

export const AdminList = styled.ol`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: center;
  height: 100%;
  list-style: decimal-leading-zero;
  width: fit-content;
  background: hsl(0, 45%, 56%);
  padding: 2rem;
  border-radius: 12px;

  li {
    letter-spacing: 3px;
    margin: 0 1rem;
  }
`;
export const AdminMisc = styled.div`
  grid-area: c;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: white;
  text-align: center;
  letter-spacing: 5px;
  border-radius: 12px;

  h2 {
    margin: 1rem;
  }
  @media (max-width: 720px) {
    margin: 0 1rem;
  }
`;

// List of users
export const AdminUserContent = styled.div`
  grid-area: b;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const AdminTable = styled.table`
  color: white;
  border-collapse: collapse;
  background: hsl(var(--primary-color));
  border-radius: 12px;

  thead h2 {
    font-size: var(--fs-600);
    letter-spacing: 5px;
    margin: 1rem;
  }
  thead th {
    letter-spacing: 2px;
  }
  td,
  th {
    padding: 1rem 2rem;
    font-size: var(--fs-300);
  }
  tbody tr {
    border-bottom: 1px solid black;

    :hover {
      background: hsl(0, 100%, 100%, 0.1);
    }
  }

  tbody tr:last-child {
    border-bottom: none;
  }

  @media (max-width: 720px) {
    margin: 0;

    td,
    th {
      padding: 0.2rem;
    }
  }
`;

export const DeleteButton = styled.button`
  background: hsl(0, 45%, 56%);
  border: none;
  padding: 1rem 2rem;
  border-radius: 12px;
  cursor: pointer;

  :hover {
    background: hsl(0, 45%, 56%, 0.5);
  }
  @media (max-width: 720px) {
    padding: 0.8rem;
  }
`;
export const EditButton = styled.button`
  background: hsl(var(--secondary-color));
  border: none;
  padding: 1rem 2rem;
  border-radius: 12px;
  cursor: pointer;

  :hover {
    background: hsl(var(--secondary-color), 0.5);
  }

  @media (max-width: 720px) {
    padding: 0.8rem;
  }
`;

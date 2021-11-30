import styled from 'styled-components';

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 100px;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Rapper = styled.div`
  margin-top: 5rem;
  margin-bottom: 5rem;

  background: hsl(var(--primary-color));
  color: hsl(var(--secondary-color));
  min-width: 50%;
  max-width: 99%;
  max-height: 70%;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  h2 {
  }
  z-index: 2;

  .modal_buttons {
    width: 100%;
    padding: 1rem;
    display: flex;
    justify-content: flex-end;
  }

  @media (max-width: 720px) {
    width: 99%;
    max-height: 80%;
    margin-top: 0rem;
    margin-bottom: 5rem;
    overflow-y: scroll;
  }
`;

export const ModalTable = styled.table`
  font-weight: 400;
  border-collapse: collapse;
  margin-left: 1rem;
  margin-right: 1rem;
  overflow: hidden;

  video {
    /* margin: 0; */
    height: 40px;
    width: 200px;
  }
  video::-webkit-media-controls-current-time-display,
  video::-webkit-media-controls-time-remaining-display {
    display: none;
  }

  thead {
    text-align: left;
  }

  tbody tr {
    border-bottom: 1px solid #dddddd;
  }

  tbody tr:last-child {
    border-bottom: none;
  }
  th,
  td {
    padding: 1.25rem 1.5rem;
  }
  .PlayTitle {
    font-size: var(--fs-600);
    text-align: center;
  }

  z-index: 2;

  a {
    color: hsl(var(--secondary-color));
    margin: 5px;
  }

  @media (max-width: 720px) {
    font-size: var(--fs-300);
    thead tr th h2 {
      font-size: var(--fs-400);
    }
    th,
    td {
      padding: 0.5rem 0.5rem;
    }
    tbody tr td {
      font-size: var(--fs-200);
    }
  }
`;

export const ModalCross = styled.img`
  width: 25px;
  height: 25px;
  cursor: pointer;
`;
export const ModalArrow = styled.img`
  height: 40px;
  margin: 5px;
  cursor: pointer;
`;

export const LinkButton = styled.button``;

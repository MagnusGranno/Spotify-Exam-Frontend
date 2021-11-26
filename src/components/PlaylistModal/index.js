import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { fetchPlayList } from "../../settings";

// Images
import arrow from "../../images/arrow.png";
import cross from "../../images/cross.png";
// Styles
import {
  ModalBackdrop,
  Rapper,
  ModalTable,
  LinkButton,
  ModalCross,
  ModalArrow,
} from "./PlaylistModal.styles";

const PlaylistModal = ({
  showModal,
  setShowModal,
  playlistID,
  playlistName,
}) => {
  const [tracks, setTracks] = useState([]);

  let count = 1;

  const miliToMin = (millis) => {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  };

  const clickMe = () => {
    axios(`${fetchPlayList}/playlist/${playlistID}`, { method: "GET" }).then(
      (tracksResponse) => {
        setTracks(tracksResponse.data);
        // console.log(tracksResponse.data);
      }
    );
  };
  useEffect(() => {
    axios(`${fetchPlayList}/playlist/${playlistID}`, { method: "GET" }).then(
      (tracksResponse) => {
        setTracks(tracksResponse.data);
        console.log(tracksResponse.data);
      }
    );
  }, [playlistID]);

  const outSideClick = () => {
    setShowModal(!showModal);
  };
  return (
    <ModalBackdrop>
      <Rapper>
        <div className="modal_buttons">
          <ModalCross src={cross} alt="cross" onClick={outSideClick} />
        </div>
        <ModalTable>
          <thead>
            <tr>
              <th colSpan="4" className="PlayTitle">
                {playlistName}
              </th>
            </tr>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Artists</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            {tracks.map((track) => (
              <tr key={track.id}>
                <td>{count++}</td>
                <td>{track.name}</td>
                <td>
                  {track.artists.map((item, i) => (
                    <>
                      {track.artists.length - 1 === i
                        ? item.name
                        : item.name + " & "}{" "}
                    </>
                  ))}
                </td>
                <td>{miliToMin(track.duration_ms)}</td>
              </tr>
            ))}
          </tbody>
        </ModalTable>
      </Rapper>
    </ModalBackdrop>
  );
};

export default PlaylistModal;

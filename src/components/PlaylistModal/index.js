import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import { fetchPlayList } from '../../settings';

// Images
import cross from '../../images/cross.png';

// Styles
import {
  ModalBackdrop,
  Rapper,
  ModalTable,
  ModalCross,
} from './PlaylistModal.styles';

const PlaylistModal = ({
  showModal,
  setShowModal,
  playlistID,
  playlistName,
}) => {
  const [tracks, setTracks] = useState([]);

  const [width, setWidth] = useState(window.innerWidth);

  const resize = () => {
    setWidth(window.innerWidth);
  };
  window.addEventListener('resize', resize);

  let count = 1;

  const miliToMin = (millis) => {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
  };

  useEffect(() => {
    axios(`${fetchPlayList}/playlist/${playlistID}`, { method: 'GET' }).then(
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
                <h2>{playlistName}</h2>
              </th>
            </tr>
            <tr>
              {width > 720 && <th>#</th>}
              <th>Name</th>
              <th>Artists</th>
              <th>Duration</th>
              {width > 720 && <th>Preview</th>}
            </tr>
          </thead>
          <tbody>
            {tracks.map((track) => (
              <tr key={track.id}>
                {width > 720 && <td>{count++}</td>}
                <td>{track.name}</td>
                <td>
                  {track.artists.map((item, i) => (
                    <>
                      {track.artists.length - 1 === i
                        ? item.name
                        : item.name + ' & '}{' '}
                    </>
                  ))}
                </td>
                <td>{miliToMin(track.duration_ms)}</td>
                {width > 720 && (
                  <td>
                    {track.preview_url && (
                      <video controls>
                        <source
                          src={track.preview_url}
                          type="audio/mpeg"
                        ></source>
                      </video>
                    )}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </ModalTable>
      </Rapper>
    </ModalBackdrop>
  );
};

export default PlaylistModal;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
// Url
import { userPlaylistsDB } from '../../settings';

// Styles
import { MyBody } from './MyPlaylists.styles';

// Components
import PlaylistGrid from '../PlayListGrid';

function MyPlaylists({
  loginCredentials,
  userPlaylists,
  setUserPlaylists,
  loggedIn,
}) {
  const [showModal, setShowModal] = useState(false);

  const fetchMyPlaylists = () => {
    try {
      axios(`${userPlaylistsDB}${sessionStorage.getItem('username')}`, {
        method: 'GET',
      }).then((response) => {
        setUserPlaylists(response.data);
      });
    } catch (ex) {
      console.log(ex);
    }
  };
  useEffect(() => {
    fetchMyPlaylists();
  }, []);

  return (
    <MyBody>
      <PlaylistGrid
        playlistList={userPlaylists}
        showModal={showModal}
        setShowModal={setShowModal}
        userPlaylists={userPlaylists}
        setUserPlaylists={setUserPlaylists}
        loggedIn={loggedIn}
      />
    </MyBody>
  );
}

export default MyPlaylists;

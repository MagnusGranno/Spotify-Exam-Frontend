import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Styles
import { Wrapper } from './Home.styles';

// Components
import PlaylistGrid from '../PlayListGrid';
import Spinner from '../Spinner';

// Url
import { popularPlaylists } from '../../settings';

function Home({ loginCredentials, userPlaylists, setUserPlaylists, loggedIn }) {
  const [popularLists, setPopularLists] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchPopular = () => {
    setLoading(true);
    try {
      console.log(loading);
      axios(popularPlaylists, {
        method: 'GET',
      }).then((response) => {
        setPopularLists(response.data);
        setLoading(false);
      });
    } catch (ex) {
      console.log(ex);
    }
    console.log(loading);
  };
  useEffect(() => {
    fetchPopular();
  }, []);

  return (
    <Wrapper>
      <h1>Most popular playlists</h1>
      {loading && <Spinner />}
      <PlaylistGrid
        playlistList={popularLists}
        showModal={showModal}
        setShowModal={setShowModal}
        userPlaylists={userPlaylists}
        setUserPlaylists={setUserPlaylists}
        loggedIn={loggedIn}
      />
    </Wrapper>
  );
}

export default Home;

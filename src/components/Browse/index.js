import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Url
import { fetchCategories, fetchByCategory } from '../../settings';

// Styles
import { MyBody, DropdownMenu } from './Browse.styles';

// Components
import Dropdown from '../Dropdown';
import PlaylistGrid from '../PlayListGrid';

function Browse({
  genre,
  setGenre,
  genreList,
  setGenreList,
  userPlaylists,
  setUserPlaylists,
  loggedIn,
}) {
  const [showModal, setShowModal] = useState(false);

  const [playlistList, setPlaylistList] = useState([]);

  useEffect(() => {
    if (genreList.length === 0) {
      axios(fetchCategories, {
        method: 'GET',
      }).then((genreResponse) => {
        setGenreList(genreResponse.data);
      });
    }
  }, []);

  useEffect(() => {
    if (!genre) {
      axios(`${fetchByCategory}toplists`, {
        method: 'GET',
      }).then((playlistResponse) => {
        setPlaylistList(playlistResponse.data);
      });
    } else {
      axios(`${fetchByCategory}${genre}`, {
        method: 'GET',
      }).then((playlistResponse) => {
        setPlaylistList(playlistResponse.data);
      });
    }
  }, [genre]);

  const genreChanged = (val) => {
    setGenre(val);
  };

  return (
    <MyBody>
      <DropdownMenu>
        <h2>Choose Genre</h2>
        <Dropdown
          genreList={genreList}
          selectedValue={genre}
          changed={genreChanged}
        />
      </DropdownMenu>
      <PlaylistGrid
        playlistList={playlistList}
        showModal={showModal}
        setShowModal={setShowModal}
        userPlaylists={userPlaylists}
        setUserPlaylists={setUserPlaylists}
        loggedIn={loggedIn}
      />
    </MyBody>
  );
}

export default Browse;

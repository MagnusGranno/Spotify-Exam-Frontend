import React, { useState, useEffect } from 'react';
import axios from 'axios';
// Url
import { fetchCategories, fetchByCategory } from '../../../settings';

// Styles
import { MyBody, DropdownMenu } from './Browse.styles';
// Components
import Dropdown from './Dropdown';
import PlaylistGrid from './PlaylistGrid';
import PlaylistModal from '../../PlaylistModal';

function Browse() {
  const [genre, setGenre] = useState('');
  const [genreList, setGenreList] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const [playlist, setPlaylist] = useState({
    selectedPlaylist: '',
    listOfPlaylistFromAPI: [],
  });
  const [playlistList, setPlayListList] = useState([]);
  const [selectedPlaylist, setSelectedPlaylist] = useState([]);

  useEffect(() => {
    if (sessionStorage.getItem('genre')) {
      setGenre(sessionStorage.getItem('genre'));
      axios(`${fetchByCategory}${sessionStorage.getItem('genre')}`, {
        method: 'GET',
      }).then((playlistResponse) => {
        setPlayListList(playlistResponse.data);
      });
    }
  }, [genre]);

  useEffect(() => {
    axios(fetchCategories, {
      method: 'GET',
    }).then((genreResponse) => {
      setGenreList(genreResponse.data);
    });
    if (!sessionStorage.getItem('genre')) {
      axios(`${fetchByCategory}toplists`, {
        method: 'GET',
      }).then((playlistResponse) => {
        setPlayListList(playlistResponse.data);
      });
    }
  }, []);

  const genreChanged = (val) => {
    setGenre(val);
    sessionStorage.setItem('genre', val);
  };

  return (
    <MyBody>
      <DropdownMenu>
        <h2>Choose Genre</h2>
        <Dropdown
          options={genreList}
          selectedValue={genre}
          changed={genreChanged}
        />
      </DropdownMenu>
      <PlaylistGrid
        options={playlistList}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </MyBody>
  );
}

export default Browse;
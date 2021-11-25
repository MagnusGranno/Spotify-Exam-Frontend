import React, { useState, useEffect } from 'react';
import axios from 'axios';
// Url
import { fetchCategories, fetchByCategory } from '../../../settings';

// Styles
import { MyBody, DropdownMenu } from './Browse.styles';
import Dropdown from './Dropdown';
import PlaylistGrid from './PlaylistGrid';

function Browse() {
  const [genre, setGenre] = useState('');
  const [genreList, setGenreList] = useState([]);

  const [playlist, setPlaylist] = useState({
    selectedPlaylist: '',
    listOfPlaylistFromAPI: [],
  });
  const [playlistList, setPlayListList] = useState([]);
  const [selectedPlaylist, setSelectedPlaylist] = useState([]);

  useEffect(() => {
    if (sessionStorage.getItem('genre')) {
      setGenre(sessionStorage.getItem('genre'));
    } else {
      setGenre('toplists');
    }
    axios(`${fetchByCategory}${genre}`, {
      method: 'GET',
    }).then((playlistResponse) => {
      setPlayListList(playlistResponse.data);
    });
  }, [genre]);

  useEffect(() => {
    axios(fetchCategories, {
      method: 'GET',
    }).then((genreResponse) => {
      setGenreList(genreResponse.data);
    });
  }, []);

  const genreChanged = (val) => {
    setGenre(val);
    sessionStorage.setItem('genre', val);
    axios(`${fetchByCategory}${val}`, {
      method: 'GET',
    }).then((playlistResponse) => {
      setPlayListList(playlistResponse.data);
    });
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
      <PlaylistGrid options={playlistList} />
    </MyBody>
  );
}

export default Browse;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
// Url
import { fetchCategories, fetchByCategory } from '../../../settings';

// Styles
import { MyBody, DropdownMenu } from './Browse.styles';
import Dropdown from './Dropdown';
import PlaylistGrid from './PlaylistGrid';

function Browse() {
  const [genres, setGenres] = useState({
    selectedGenre: '',
    listOfGenresFromAPI: [],
  });

  const [playlist, setPlaylist] = useState({
    selectedPlaylist: '',
    listOfPlaylistFromAPI: [],
  });

  useEffect(() => {
    axios(fetchCategories, {
      method: 'GET',
    }).then((genreResponse) => {
      setGenres({
        selectedGenre: genres.selectedGenre,
        listOfGenresFromAPI: genreResponse.data,
      });
    });
  }, []);

  const genreChanged = (val) => {
    setGenres({
      selectedGenre: val,
      listOfGenresFromAPI: genres.listOfGenresFromAPI,
    });
    axios(`${fetchByCategory}${val}`, {
      method: 'GET',
    }).then((playlistResponse) => {
      setPlaylist({
        selectedPlaylist: playlist.selectedPlaylist,
        listOfPlaylistFromAPI: playlistResponse.data,
      });
    });
    console.log(val);
  };

  return (
    <MyBody>
      <DropdownMenu>
        <Dropdown
          options={genres.listOfGenresFromAPI}
          selectedValue={genres.selectedGenre}
          changed={genreChanged}
        />
      </DropdownMenu>
      <PlaylistGrid options={playlist.listOfPlaylistFromAPI} />
    </MyBody>
  );
}

export default Browse;

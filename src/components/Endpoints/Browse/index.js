import React, { useState, useEffect } from "react";
import axios from "axios";
// Url
import {
  fetchCategories,
  fetchByCategory
} from "../../../settings";

// Styles
import { MyBody, DropdownMenu } from "./Browse.styles";
// Components
import Dropdown from "./Dropdown";
import PlaylistGrid from "./PlaylistGrid";
import PlaylistModal from "../../PlaylistModal";

function Browse({
  loginCredentials,
  genre,
  setGenre,
  genreList,
  setGenreList,
  userPlaylists,
  setUserPlaylists,
  loggedIn
}) {
  const [showModal, setShowModal] = useState(false);

  const [playlist, setPlaylist] = useState({
    selectedPlaylist: "",
    listOfPlaylistFromAPI: [],
  });
  const [playlistList, setPlaylistList] = useState([]);
  const [selectedPlaylist, setSelectedPlaylist] = useState([]);

  useEffect(() => {
    if (genreList.length === 0) {
      axios(fetchCategories, {
        method: "GET",
      }).then((genreResponse) => {
        setGenreList(genreResponse.data);
      });
    }
  }, []);

  useEffect(() => {
    if (!genre) {
      axios(`${fetchByCategory}toplists`, {
        method: "GET",
      }).then((playlistResponse) => {
        setPlaylistList(playlistResponse.data);
      });
    } else {
      axios(`${fetchByCategory}${genre}`, {
        method: "GET",
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
          options={genreList}
          selectedValue={genre}
          changed={genreChanged}
        />
      </DropdownMenu>
      <PlaylistGrid
        playlistList={playlistList}
        showModal={showModal}
        setShowModal={setShowModal}
        loginCredentials={loginCredentials}
        userPlaylists={userPlaylists}
        setUserPlaylists={setUserPlaylists}
        loggedIn={loggedIn}
        
      />
    </MyBody>
  );
}

export default Browse;

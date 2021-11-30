import React, { useEffect, useState } from 'react';
import {
  Grid,
  Btn,
  GridContainer,
  LeftButton,
  RightButton,
  GridImg,
  Button,
} from './Browse.styles';
import { Link, useRouteMatch, Switch, Route } from 'react-router-dom';

import PlaylistModal from '../../PlaylistModal';
import axios from 'axios';
import { followUrl, unFollowUrl, userPlaylistsDB } from '../../../settings';

const PlaylistGrid = ({
  playlistList,
  showModal,
  setShowModal,
  loginCredentials,
  userPlaylists,
  setUserPlaylists,
  loggedIn,
}) => {
  const [playlistId, setPlaylistId] = useState('');
  const [playlistName, setPlaylistName] = useState('');

  function follow(e) {
    updateUserPlaylist(followUrl, e.target.id);
    setUserPlaylists([...userPlaylists, { id: e.target.id }]);
  }

  const unFollow = (e) => {
    updateUserPlaylist(unFollowUrl, e.target.id);
    const arr = userPlaylists.filter((x) => x.id !== e.target.id);
    setUserPlaylists(arr);
  };

  const updateUserPlaylist = (url, id) => {
    axios(url, {
      method: 'POST',
      data: {
        username: sessionStorage.getItem('username'),
        spotifyId: id,
      },
    });
  };

  const onPictureClick = (id, name) => {
    setPlaylistId(id);
    setShowModal(!showModal);
    setPlaylistName(name);
    console.log(playlistList);
  };

  return (
    <>
      {showModal && (
        <PlaylistModal
          playlistID={playlistId}
          showModal={showModal}
          setShowModal={setShowModal}
          playlistName={playlistName}
        />
      )}
      <GridContainer>
        {playlistList.map((item, i) => (
          <Grid key={i} value={item.id}>
            <GridImg
              src={item.imageUrl}
              alt="thumb"
              onClick={() => onPictureClick(item.id, item.name)}
            />
            <Btn>
              {loggedIn &&
                (userPlaylists.find((id) => id.id === item.id) ? (
                  <Button
                    id={item.id}
                    onClick={unFollow}
                    bgColor="--secondary-color"
                    hoverColor="--secondary-color"
                  >
                    Unfollow
                  </Button>
                ) : (
                  <Button
                    id={item.id}
                    onClick={follow}
                    bgColor="--primary-color"
                    hoverColor="--secondary-color"
                  >
                    Follow
                  </Button>
                ))}
              <Button
                href={`https://open.spotify.com/playlist/${item.id}`}
                target="_blank"
                bgColor="--primary-color"
                hoverColor="--secondary-color"
              >
                Play
              </Button>
            </Btn>
          </Grid>
        ))}
      </GridContainer>
    </>
  );
};

export default PlaylistGrid;

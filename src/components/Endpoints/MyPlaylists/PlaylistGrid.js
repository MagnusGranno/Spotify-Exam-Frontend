import React, { useState } from 'react';
import {
  Grid,
  Btn,
  GridContainer,
  LeftButton,
  RightButton,
  GridImg,
} from './Browse.styles';
import { Link, useRouteMatch, Switch, Route } from 'react-router-dom';

import PlaylistModal from '../../PlaylistModal';

function Follow() {
  console.log('do follow');
}

function Like() {
  console.log('do Like');
}

const PlaylistGrid = ({ options, showModal, setShowModal }) => {
  const [playlistId, setPlaylistId] = useState('');
  const [playlistName, setPlaylistName] = useState('');

  const onPictureClick = (id, name) => {
    setPlaylistId(id);
    setShowModal(!showModal);
    setPlaylistName(name);
    console.log(options);
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
        {options.map((item, idx) => (
          <Grid key={idx + 1} value={item.id}>
            <GridImg
              src={item.imageUrl}
              alt="thumb"
              onClick={() => onPictureClick(item.id, item.name)}
            />
            <Btn>
              <LeftButton>Follow</LeftButton>
              <RightButton>Like</RightButton>
            </Btn>
          </Grid>
        ))}
      </GridContainer>
    </>
  );
};

export default PlaylistGrid;

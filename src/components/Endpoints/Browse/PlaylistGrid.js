import React, { useState } from "react";
import {
  Grid,
  Btn,
  GridContainer,
  LeftButton,
  RightButton,
  GridImg,
} from "./Browse.styles";
import { Link, useRouteMatch, Switch, Route } from "react-router-dom";

import PlaylistModal from "../../PlaylistModal";
import axios from "axios";
import { follow } from "../../../settings";
import e from "cors";


const PlaylistGrid = ({ options, showModal, setShowModal, loginCredentials }) => {
  const [playlistId, setPlaylistId] = useState("");
  const [playlistName, setPlaylistName] = useState("");
  
  function Follow(e) {
    console.log(e);
    axios(follow,{
      method: 'POST',
      data:{
        username: loginCredentials.username,
        spotifyId: e.target.id
      }
    });
  }

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
              <LeftButton id={item.id} onClick={Follow}>Follow</LeftButton>

              <RightButton href={`https://open.spotify.com/playlist/${item.id}`}
                  target="_blank">
                  Play
              </RightButton>
            </Btn>
          </Grid>
        ))}
      </GridContainer>
    </>
  );
};

export default PlaylistGrid;

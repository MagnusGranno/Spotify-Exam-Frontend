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
import { followUrl, unFollowUrl, userPlaylistsDB } from "../../../settings";

const PlaylistGrid = ({
  playlistList,
  showModal,
  setShowModal,
  loginCredentials,
  userPlaylists,
  setUserPlaylists
}) => {
  const [playlistId, setPlaylistId] = useState("");
  const [playlistName, setPlaylistName] = useState("");

  // function follow(e) {
  //   updateUserPlaylist(followUrl, e.target.id);
  // }
  
  // const unFollow = (e) => {
  //   updateUserPlaylist(unFollowUrl, e.target.id)
  // }
  
  // const updateUserPlaylist = (url,id) => {
  //   // axios(url, {
  //   //   method: "POST",
  //   //   data: {
  //   //     username: sessionStorage.getItem("username"),
  //   //     spotifyId: id,
  //   //   },
  //   // });
    
  //   // axios(`${userPlaylistsDB}${sessionStorage.getItem("username")}`, {
  //   //   method: "GET",
  //   // }).then((response) => {
  //   //   setUserPlaylists(response.data);
  //   // });
    
  // }

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
              {/* {userPlaylists.find(id => id.id === item.id) ? (
                <LeftButton id={item.id} onClick={unFollow} bgColor="--secondary-color" hoverColor="--secondary-color">Unfollow</LeftButton>
              ):(
                <LeftButton id={item.id} onClick={follow} bgColor="--primary-color" hoverColor="--secondary-color">Follow</LeftButton>
              )}  */}
              <RightButton
                href={`https://open.spotify.com/playlist/${item.id}`}
                target="_blank"
              >
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

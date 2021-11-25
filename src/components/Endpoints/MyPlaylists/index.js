import React, { useState, useEffect } from 'react';

// Url
// Facade
import { facade } from '../../../apiFacade';

// Styles
import { MyBody, Container, Grid, GridContainer } from './MyPlaylists.styles';

function MyPlaylists() {
  
  const myPlaylistIDS = [12312312, 103012312, 102310231, 12301023, 1230012];
  const myPlaylists = [{}]


  

  return (
    <MyBody>
      <GridContainer container spacing={2}>
        <img src="https://picsum.photos/200" alt="thumb"></img>
        <img src="https://picsum.photos/200" alt="thumb"></img>
        <img src="https://picsum.photos/200" alt="thumb"></img>
        <img src="https://picsum.photos/200" alt="thumb"></img>
      </GridContainer>
    </MyBody>
  );
}

export default MyPlaylists;

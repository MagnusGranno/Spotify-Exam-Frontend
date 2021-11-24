import React, { useState, useEffect } from 'react';

// Url
// Facade
import { facade } from '../../../apiFacade';

// Styles
import { MyBody, Container, Grid, GridContainer } from './MyPlaylists.styles';

function MyPlaylists() {
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

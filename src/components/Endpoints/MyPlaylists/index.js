import React, { useState, useEffect } from 'react';

// Url
import { fiveServers } from '../../../settings';

// Facade
import { facade } from '../../../apiFacade';

// Styles
import { MyBody, Container, Grid, GridContainer } from './MyPlaylists.styles';

function MyPlaylists({ title }) {
  const [dataFromServer, setDataFromServer] = useState([
    { value: '', url: '' },
  ]);
  useEffect(() => {
    facade
      .fetchAny(fiveServers)
      .then((data) => setDataFromServer(data))
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <MyBody>
      <GridContainer container spacing={2}>
  <Grid item xs={8}>
    <img src="https://picsum.photos/200"></img>
  </Grid>
  <Grid item xs={4}>
  <img src="https://picsum.photos/200"></img>
  </Grid>
  <Grid item xs={4}>
  <img src="https://picsum.photos/200"></img>
  </Grid>
  <Grid item xs={8}>
  <img src="https://picsum.photos/200"></img>
  </Grid>
</GridContainer>
    </MyBody>
  );
}

export default MyPlaylists;

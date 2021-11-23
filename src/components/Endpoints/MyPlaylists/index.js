import React, { useState, useEffect } from 'react';

// Url
import { fiveServers } from '../../../settings';

// Facade
import { facade } from '../../../apiFacade';

// Styles
import { MyBody, Container } from './MyPlaylists.styles';

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
      <div>This is the {title} endpoint 😻 </div>
      <Container>
{/*        <Grid container spacing={2}>
        <Grid item xs={6} md={8}>
          <Item>xs=6 md=8</Item>
        </Grid>
        <Grid item xs={6} md={4}>
          <Item>xs=6 md=4</Item>
        </Grid>
          <Grid item xs={6} md={4}>
            <Item>xs=6 md=4</Item>
        </Grid>
          <Grid item xs={6} md={8}>
            <Item>xs=6 md=8</Item>
        </Grid>
        </Grid> */}
      </Container>
    </MyBody>
  );
}

export default MyPlaylists;

import React from 'react';
import {
  Grid,
  Btn,
  GridContainer,
  LeftButton,
  RightButton,
  GridImg,
} from './Browse.styles';

function Follow() {
  console.log('do follow');
}

function Like() {
  console.log('do Like');
}

const PlaylistGrid = (props) => {
  return (
    <GridContainer>
      {props.options.map((item, idx) => (
        <Grid key={idx + 1} value={item.id}>
          <GridImg
            height="250px"
            width="250px"
            src={item.imageUrl}
            alt="thumb"
          />
          <Btn>
            <LeftButton onClick={Follow}>Follow</LeftButton>
            <RightButton onClick={Like}>Like</RightButton>
          </Btn>
        </Grid>
      ))}
    </GridContainer>
  );
};

export default PlaylistGrid;

// <Grid item xs={8}>
// <img src={props}></img>
// <Btn> {item.imageUrl}
//   <Button onClick={Follow}>Follow</Button>
//   <Button onClick={Like}>Like</Button>
// </Btn>
// </Grid>

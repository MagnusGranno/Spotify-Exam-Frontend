import React from "react";
import { Grid, Btn, Button, GridContainer } from "./Browse.styles";

function Follow() {
  console.log("do follow");
}

function Like() {
  console.log("do Like");
}

const PlaylistGrid = (props) => {
  let pictureVar = 8;

  return (
    <GridContainer>
      {props.options.map((item, idx) => (
        <Grid key={idx + 1} value={item.id}>
          <div style={{fontSize: '16px', fontWeight: 'bold', fontFamily: 'sans-serif'}}>
           {item.name}
          </div>
          <img height="250px" width="250px" src={item.imageUrl}></img>
          <Btn>
            <Button onClick={Follow}>Follow</Button>
            <Button onClick={Like}>Like</Button>
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

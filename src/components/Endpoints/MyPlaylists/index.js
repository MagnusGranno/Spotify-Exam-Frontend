import React, { useState, useEffect } from "react";

// Url
import { fiveServers } from "../../../settings";

// Facade
import { facade } from "../../../apiFacade";

// Styles
import { MyBody, Container, Grid, GridContainer } from "./MyPlaylists.styles";

function MyPlaylists() {
  return (
    <MyBody>
      <GridContainer container spacing={2}>
        <img src="https://picsum.photos/200"></img>
        <img src="https://picsum.photos/200"></img>
        <img src="https://picsum.photos/200"></img>
        <img src="https://picsum.photos/200"></img>
      </GridContainer>
    </MyBody>
  );
}

export default MyPlaylists;

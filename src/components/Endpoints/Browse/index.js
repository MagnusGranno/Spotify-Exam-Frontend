import React, { useState, useEffect } from "react";

// Url
import { fiveServers } from "../../../settings";

// Facade
import { facade } from "../../../apiFacade";

// Styles
import { MyBody, Container, Grid, GridContainer, DropdownMenu } from "./Browse.styles";
import Dropdown from "./Dropdown";

function Browse() {
  const [genres, setGenres] = useState({
    selectedGenre: "",
    listOfGenresFromAPI: [],
  });

  const genreChanged = (val) => {
    setGenres({
      selectedGenre: val,
      listOfGenresFromAPI: genres.listOfGenresFromAPI,
    });
  };

  return (
    <MyBody>
      <DropdownMenu>
      <form onSubmit={""}>
        <Dropdown
          label=""
          options={genres.listOfGenresFromAPI}
          selectedValue={genres.selectedGenre}
          changed={genreChanged}
        />
      </form>
      </DropdownMenu>

      <GridContainer container spacing={2}>
        <img src="https://picsum.photos/200"></img>
        <img src="https://picsum.photos/200"></img>
        <img src="https://picsum.photos/200"></img>
        <img src="https://picsum.photos/200"></img>
      </GridContainer>
    </MyBody>
  );
}

export default Browse;

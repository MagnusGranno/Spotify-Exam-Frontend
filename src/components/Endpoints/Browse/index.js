import React, { useState, useEffect } from "react";
import axios from "axios";
// Url
import { fetchCategories } from "../../../settings";

// Facade
import { facade } from "../../../apiFacade";

// Styles
import {
  MyBody,
  Container,
  Grid,
  GridContainer,
  DropdownMenu,
  Btn,
  BtnDiv,
} from "./Browse.styles";
import Dropdown from "./Dropdown";

function Browse() {
  const [genres, setGenres] = useState({
    selectedGenre: "",
    listOfGenresFromAPI: [],
  });

  useEffect(() => {
    axios(fetchCategories, {
      method: "GET",
    }).then((genreResponse) => {
      setGenres({
        selectedGenre: genres.selectedGenre,
        listOfGenresFromAPI: genreResponse.data,
      });
    });
  }, [genres.selectedGenre]);

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
        <Grid item xs={8}>
          <img src="https://picsum.photos/200"></img>
          <Btn>
            <p align="Right">
              <button>Follow</button>
            </p>
            <p align="Left">
              <button>Like</button>
            </p>
          </Btn>
        </Grid>
        <Grid item xs={8}>
          <img src="https://picsum.photos/200"></img>
        </Grid>
        <img src="https://picsum.photos/200"></img>
        <img src="https://picsum.photos/200"></img>
        <img src="https://picsum.photos/200"></img>
        <img src="https://picsum.photos/200"></img>
        <img src="https://picsum.photos/200"></img>
        <img src="https://picsum.photos/200"></img>
      </GridContainer>
      <button />
    </MyBody>
  );
}

export default Browse;

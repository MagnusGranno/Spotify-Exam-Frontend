//libraries
import { useState, useEffect } from 'react';
import axios from 'axios';

// Routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Header from './components/Header';
import Browse from './components/Browse';
import Home from './components/Home';
import Login from './components/Login';
import MyPlaylists from './components/MyPlaylists';
import Signup from './components/Signup';
import AdminPanel from './components/AdminPanel';

// Urls
import { userPlaylistsDB } from './settings';

// Styles
import { GlobalStyle } from './GlobalStyle';

// Facade
import { facade } from './apiFacade';

function App() {
  const initialState = {
    username: '',
    password: '',
  };
  const [genre, setGenre] = useState('');
  const [genreList, setGenreList] = useState([]);
  const [loggedIn, setLoggedIn] = useState(facade.loggedIn);
  const [loginCredentials, setLoginCredentials] = useState(initialState);
  const [userPlaylists, setUserPlaylists] = useState([]);

  useEffect(() => {
    if (sessionStorage.getItem('username') && facade.loggedIn) {
      setLoggedIn(true);

      axios(`${userPlaylistsDB}${sessionStorage.getItem('username')}`, {
        method: 'GET',
        headers: {
          'x-access-token': sessionStorage.getItem('jwtToken'),
        },
      }).then((response) => {
        setUserPlaylists(response.data);
      });
    }
  }, []);
  return (
    <Router>
      <Header
        loggedIn={loggedIn}
        loginCredentials={loginCredentials}
        setLoginCredentials={setLoginCredentials}
        setLoggedIn={setLoggedIn}
        setUserPlaylists={setUserPlaylists}
      />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home
              loggedIn={loggedIn}
              userPlaylists={userPlaylists}
              setUserPlaylists={setUserPlaylists}
            />
          }
        />
        <Route
          path="/login"
          element={
            <Login
              loginCredentials={loginCredentials}
              setLoginCredentials={setLoginCredentials}
              setLoggedIn={setLoggedIn}
              setUserPlaylists={setUserPlaylists}
            />
          }
        />
        <Route
          path="/browse"
          element={
            <Browse
              genre={genre}
              setGenre={setGenre}
              genreList={genreList}
              setGenreList={setGenreList}
              userPlaylists={userPlaylists}
              setUserPlaylists={setUserPlaylists}
              loggedIn={loggedIn}
            />
          }
        />
        <Route
          path="/myPlaylists"
          element={
            <MyPlaylists
              loggedIn={loggedIn}
              loginCredentials={loginCredentials}
              userPlaylists={userPlaylists}
              setUserPlaylists={setUserPlaylists}
            />
          }
        />
        <Route
          path="/signup"
          element={
            <Signup
              setLoginCredentials={setLoginCredentials}
              setLoggedIn={setLoggedIn}
            />
          }
        />

        <Route path="/adminpanel" element={<AdminPanel />} />
      </Routes>
      <GlobalStyle />
    </Router>
  );
}

export default App;

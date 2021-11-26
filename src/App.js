import { useState, useEffect } from 'react';

// Routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Header from './components/Header';
import Browse from './components/Endpoints/Browse';
import Home from './components/Home';
import Login from './components/Login';
import MyPlaylists from './components/Endpoints/MyPlaylists';
import Signup from './components/Signup';

// Styles
import { GlobalStyle } from './GlobalStyle';

// Facade
import { facade } from './apiFacade';

function App() {
  const initialState = {
    username: '',
    password: '',
  };
  const [loggedIn, setLoggedIn] = useState(facade.loggedIn);
  const [loginCredentials, setLoginCredentials] = useState(initialState);

  useEffect(() => {
    if (sessionStorage.getItem('username') && facade.loggedIn) {
      setLoggedIn(true);
    }
  }, []);
  return (
    <Router>
      <Header
        loggedIn={loggedIn}
        loginCredentials={loginCredentials}
        setLoginCredentials={setLoginCredentials}
        setLoggedIn={setLoggedIn}
      />
      {loggedIn}
      <Routes>
        <Route exact path="/" element={<Home loggedIn={loggedIn} />} />
        <Route
          path="/login"
          element={
            <Login
              loginCredentials={loginCredentials}
              setLoginCredentials={setLoginCredentials}
              setLoggedIn={setLoggedIn}
            />
          }
        />
        <Route path="/browse" element={<Browse title={'Browse'} />} />
        <Route
          path="/myPlaylists"
          element={<MyPlaylists title={'MyPlaylists'} />}
        />
        <Route path="/signup" element={<Signup title={'signup'} setLoginCredentials={setLoginCredentials} setLoggedIn={setLoggedIn}/>} />
      </Routes>
      <GlobalStyle />
    </Router>
  );
}

export default App;

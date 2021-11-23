import React from 'react';

// Routing
import { NavLink, useNavigate } from 'react-router-dom';

// Facade
import { facade } from '../../apiFacade';

// Styles
import { Wrapper, Content, Menu, StyledLogout } from './Header.styles';

function Header({ loggedIn, setLoggedIn, setLoginCredentials }) {
  const navigate = useNavigate();
  const logout = () => {
    facade.logout();
    setLoggedIn(false);
    setLoginCredentials({ username: '', password: '' });
    navigate('/');
  };

  return (
    <Wrapper>
      <Content>
        <h1>
      <NavLink to="/">Spotilist</NavLink>
        </h1>
        {loggedIn && (
          <h3>
            🔥 Welcome {sessionStorage.username} your roles:{' '}
            {sessionStorage.getItem('roles').split(',').join(', ')}🔥
          </h3>
        )}
        
        <Menu>
          <NavLink to="/myPlaylists">My Playlists</NavLink>
          <NavLink to="/browse">Browse</NavLink>
          {!loggedIn ? (
            <NavLink to="/login">Login</NavLink>
          ) : (
            <StyledLogout onClick={logout}>Logout</StyledLogout>
          )}
        </Menu>
      </Content>
    </Wrapper>
  );
}

export default Header;

import React from 'react';

// Routing
import { NavLink, useNavigate } from 'react-router-dom';

// Facade
import { facade } from '../../apiFacade';

// Styles
import {
  Wrapper,
  Content,
  Menu,
  StyledLogout,
  ProfileLink,
} from './Header.styles';

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
          <NavLink className="header_nav" to="/">
            Spotilist
          </NavLink>
        </h1>
        <Menu>
          <NavLink className="header_nav" to="/myPlaylists">
            My Playlists
          </NavLink>
          <NavLink className="header_nav" to="/browse">
            Browse
          </NavLink>
          {!loggedIn ? (
            <NavLink className="header_nav" to="/login">
              Login
            </NavLink>
          ) : (
            <StyledLogout onClick={logout}>Logout</StyledLogout>
          )}
          {loggedIn && <div className="line"></div>}
          {loggedIn && (
            <ProfileLink>{sessionStorage.getItem('username')}</ProfileLink>
          )}
        </Menu>
      </Content>
    </Wrapper>
  );
}

export default Header;

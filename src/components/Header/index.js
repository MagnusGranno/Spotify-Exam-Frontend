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
  StyledForm,
} from './Header.styles';

function Header({
  loggedIn,
  setLoggedIn,
  setLoginCredentials,
  setUserPlaylists,
}) {
  const navigate = useNavigate();
  const logout = () => {
    facade.logout();
    setLoggedIn(false);
    setLoginCredentials({ username: '', password: '' });
    setUserPlaylists([]);
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
        <StyledForm>
            <input 
                  placeholder ="Look up user"
                  id="header-search"
            />
            <button type="submit">Search</button>
          </StyledForm>
          {loggedIn && (
            <NavLink className="header_nav" to="/myPlaylists">
              My Playlists
            </NavLink>
          )}
          <NavLink className="header_nav" to="/browse">
            Browse
          </NavLink>
          {!loggedIn ? (
            <>
              <NavLink className="header_nav" to="/login">
                Login
              </NavLink>
              <div className="line"></div>
              <NavLink className="header_nav" to="/signup">
                Sign up
              </NavLink>
            </>
          ) : (
            <StyledLogout onClick={logout}>Logout</StyledLogout>
          )}
          {loggedIn && <div className="line"></div>}
          {loggedIn && sessionStorage.getItem('roles') === '"user"' && (
            <ProfileLink>{sessionStorage.getItem('username')}</ProfileLink>
          )}
          {sessionStorage.getItem('roles') === '"admin"' && (
            <NavLink className="header_nav" to="/adminpanel">
              Admin
            </NavLink>
          )}
        </Menu>
      </Content>
    </Wrapper>
  );
}

export default Header;

import React, { useState, useEffect } from 'react';

// Styles
import { Content, Wrapper } from './Home.styles';

// Facade
import { facade } from '../../apiFacade';

function Home({ loggedIn }) {
  return (
    <Wrapper>
      <Content>
        <h1>Home page</h1>
        <h3>Login to begin</h3>
      </Content>
    </Wrapper>
  );
}

export default Home;

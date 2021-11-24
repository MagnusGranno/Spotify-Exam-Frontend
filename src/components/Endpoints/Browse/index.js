import React, { useState, useEffect } from 'react';

// Facade
import { facade } from '../../../apiFacade';

// Styles
import { MyBody, Container } from './Browse.styles';

function Browse({ title }) {
  return (
    <MyBody>
      <div>This is the {title} endpoint 😻 </div>
      <Container></Container>
    </MyBody>
  );
}

export default Browse;

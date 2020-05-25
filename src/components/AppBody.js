import React from 'react';
import { Route } from 'react-router-dom';
// import styled from 'styled-components';

import { Grid, Row, Col } from '../styles';
import Home from './Home';
import Work from './Work';
import About from './About';
import Contact from './Contact';
import BeingUnusual from './BeingUnusual';

const AppBody = () => {
  return (
    <Grid>
      <Row>
        <Col size={1}>
          <Route exact path="/work" component={Work} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/beingUnusual" component={BeingUnusual} />
          <Route exact path="/" component={Home} />
        </Col>
      </Row>
    </Grid>
  );
};

export default AppBody;

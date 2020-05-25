import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Grid, Row, Col } from '../styles';

const FlexRow = styled.div`
  display: flex;
  justify-content: ${(props) => props.justify};
`;

const StyledLink = styled(Link)`
  color: #fff;
  padding: 0.1em 0;
  text-decoration: none;
`;

const StyledWrapper = styled.div`
  font-family: Lato;
  font-weight: 400;
  letter-spacing: 0em;
  line-height: 1.8em;
  margin-right: 2.5vw;
`;

const StyledHeaderLink = styled(StyledLink)`
  font-size: calc(1.2vw + 1rem);
`;

const StyledHeaderWrapper = styled.div`
  font-family: Merriweather;
  font-weight: 400;
  letter-spacing: 0.09em;
  line-height: 1.8em;
  margin-left: 2.5vw;
`;

const StyledNavLink = styled(StyledLink)`
  font-size: calc(0vw + 1rem);
`;

const Navbar = () => {
  return (
    <Grid>
      <Row>
        <Col size={1}>
          <FlexRow justify="flex-start">
            <StyledHeaderWrapper>
              <StyledHeaderLink to="/">theUnusualBlend</StyledHeaderLink>
            </StyledHeaderWrapper>
          </FlexRow>
        </Col>
        <Col size={1}>
          <FlexRow justify="flex-end">
            <StyledWrapper>
              <StyledNavLink to="/work">My Work</StyledNavLink>
            </StyledWrapper>
            <StyledWrapper>
              <StyledNavLink to="/about">About Me</StyledNavLink>
            </StyledWrapper>
            <StyledWrapper>
              <StyledNavLink to="/contact">Contact</StyledNavLink>
            </StyledWrapper>
            <StyledWrapper>
              <StyledNavLink to="/beingUnusual">BeingUnusual</StyledNavLink>
            </StyledWrapper>
          </FlexRow>
        </Col>
      </Row>
    </Grid>
  );
};

export default Navbar;

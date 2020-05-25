import React from 'react';
import styled from 'styled-components';
import HomeBackground from '../images/HomeBackground.jpg';

const StyledHome = styled.div`
  bottom: 0;
  left: 0;
  overflow: hidden;
  pointer-events: none;
  position: absolute;
  right: 0;
  top: 0;
  z-index: -1;
`;

const StyledImg = styled.img.attrs({
  src: HomeBackground,
  alt: 'Home',
})`
  height: 100%;
  object-fit: cover;
  object-position: 50% 50%;
  width: 100%;
`;

const Home = () => {
  return (
    <StyledHome>
      <StyledImg />
      <p>
        A conjunction of ideas, style and lifestyle that brainstorm our minds.
        theUnusualBlend is a platform that showcases my passion in different forms of art
        & design.
      </p>
    </StyledHome>
  );
};

export default Home;

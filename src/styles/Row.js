import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledRow = styled.div`
  display: flex;
  padding: 15px 0;
`;

const Row = ({ children }) => {
  return <StyledRow>{children}</StyledRow>;
};

Row.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Row;

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledCol = styled.div`
  flex: ${(props) => props.size};
  padding-left: 15px;
  padding-right: 15px;
`;

const Col = ({ size, children }) => {
  return <StyledCol size={size}>{children}</StyledCol>;
};

Col.propTypes = {
  size: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
};

export default Col;

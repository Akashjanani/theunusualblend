import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Grid = ({ children }) => <Fragment>{children}</Fragment>;

Grid.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Grid;

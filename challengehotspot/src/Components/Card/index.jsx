import React, { memo } from 'react';
import PropTypes from 'prop-types';
import CardWrapper from './style';

const Card = memo(({ title, children }) => (
  <CardWrapper>
    <h2>{title}</h2>
    {children}
  </CardWrapper>
));

Card.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Card;

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import ButtonCircleWrapper from './style';

const ButtonCircle = memo(({ children, onClick, ...props }) => (
  <ButtonCircleWrapper onClick={onClick} {...props}>
    {children}
  </ButtonCircleWrapper>
));

ButtonCircle.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default ButtonCircle;

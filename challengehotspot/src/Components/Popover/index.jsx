import React, { memo } from 'react';
import PropTypes from 'prop-types';
import PopoverWrapper from './style';

const Popover = memo(({
  title, description, position, children,
}) => (
  <PopoverWrapper position={position}>
    <div className="content-popover">
      <div className="title">{title}</div>
      <div className="description">{description}</div>
    </div>
    {children}
  </PopoverWrapper>
));


Popover.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  position: PropTypes.object,
  children: PropTypes.node.isRequired,
};

Popover.defaultProps = {
  title: '',
  description: '',
  position: {},
};

export default Popover;

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import HotspotItemWrapper from './style';

const HotspotItem = memo(({ position }) => (
  <HotspotItemWrapper position={position} />
));

HotspotItem.propTypes = {
  position: PropTypes.object.isRequired,
};

export default HotspotItem;

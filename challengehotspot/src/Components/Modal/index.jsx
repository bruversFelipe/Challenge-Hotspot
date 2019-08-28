import React, { memo } from 'react';
import PropTypes from 'prop-types';
import ModalWrapper from './style';

const Modal = memo(({
  title, position, visible, children,
}) => (
  <ModalWrapper visible={visible} position={position}>
    <div className="title">
      {title}
    </div>
    <div className="content">
      {children}
    </div>
  </ModalWrapper>
));

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  visible: PropTypes.bool,
  position: PropTypes.object,
};

Modal.defaultProps = {
  title: '',
  visible: false,
  position: {},
};

export default Modal;

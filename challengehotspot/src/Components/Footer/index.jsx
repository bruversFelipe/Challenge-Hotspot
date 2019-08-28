import React, { memo } from 'react';
import PropTypes from 'prop-types';
import FooterWrapper from './style';


const Footer = memo(({ children }) => (
  <FooterWrapper>
    {children}
  </FooterWrapper>
));

Footer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Footer;

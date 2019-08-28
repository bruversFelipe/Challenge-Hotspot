import React from 'react';
import HeaderWrapper from './style';
import LogoConpass from '../../Utils/Icons';

const menus = ['Menu 1', 'Menu 2', 'Menu 3', 'Menu 4'];

const Header = () => (
  <HeaderWrapper>
    <span><LogoConpass /></span>
    <div>
      {menus.map(item => (
        <span key={item}>{item}</span>
      ))}
    </div>
  </HeaderWrapper>
);

export default Header;

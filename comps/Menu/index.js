import React from 'react';
import { bool } from 'prop-types';
import styled from 'styled-components';

import NavAbout from '../NavAbout';
import NavContact from '../NavContact';
import NavDesign from '../NavDesign';
import NavWeb from '../NavWeb';
import Logo from '../Logo';

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #000;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  height: 100vh;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;

  @media only screen and (min-width: 1px) and (max-width: 768px) {
      width: 100%;
  }
`;

const Menu = ({ open, ...props }) => {
  
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <Logo />
      <NavAbout />
      <NavWeb />
      <NavDesign />
      <NavContact />
    </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu;
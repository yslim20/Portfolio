import React from 'react';
import { bool } from 'prop-types';
import styled from 'styled-components';

import NavAbout from '../NavAbout';
import NavContact from '../NavContact';
import NavDesign from '../NavDesign';
import NavWeb from '../NavWeb';
import Logo from '../Logo';
import LinkHor from '../LinkHor';

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content:space-between;
  align-items: center;
  background-color: #181818;
  padding-top: calc(16.60vh);
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  height: 100vh;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  box-sizing: border-box;

  @media only screen and (min-width: 1px) and (max-width: 768px) {
      width: 100%;
  }
`;

const LinkCont = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content:center;

`

const Menu = ({ open, ...props }) => {
  
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <Logo />

      <LinkCont>
        <NavAbout />
        <NavWeb />
        <NavDesign />
        <NavContact />
      </LinkCont>
      
      <LinkHor />
    </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu;
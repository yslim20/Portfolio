import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";

const TopBttn = styled.button`
  position: fixed;
  bottom: 50px;
  right: 30px;
  z-index: 99;
  width: 3.125em;
  height: 3.125em;
  border: none;
  border-radius: 50%;
  background-color: #c4c4c4;
  background-image: url('/images/icon_toTop.svg');
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

  :hover {
    background-color: #d7aef2;
    transform: scale(0.95);
  }

  @media only screen and (max-width: 480px) {
    width: 40px;
    height: 40px;
    font-size: 0.875em;
    bottom: 105px;
    right: 50%;
    margin-right: -20px;
  }
`;

const ScrollArrow = ({}) => {

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }  

  return (
    <TopBttn onClick={scrollToTop} id="myBtn" title="Go to top" />
  );
};

export default ScrollArrow;

import React from "react";
import styled from "styled-components";

const HeroImg = styled.div`
  width: 100%;
  min-height: 525px;
  margin-top: 50px;
  margin-bottom: 10px;
  background-image: url("${(props) => props.url}");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media only screen and (max-width: 1000px) {
    background-image: url("${(props) => props.urlMobile}");
  }
`;

const Frame = styled.img`
  width: 100px; height: 100px;
  object-fit: cover;
  margin-bottom: 30px;
`

const Hero = ({
  url = "/images/projects/MyLandlord/mylandlord_cover.png",
  urlMobile = "/images/projects/MyLandlord/mylandlord_cover_900.png",
  src="/video/arrow_blue-down-arrow.gif"
}) => {
  return (
    <>
      <HeroImg url={url} urlMobile={urlMobile} alt='Hero image'/>
      <Frame src={src} />
    </>
  );
};

export default Hero;

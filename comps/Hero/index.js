import React from 'react';
import styled from 'styled-components';

const HeroImg = styled.div`
  width: 100%;
  height: 525px;
  margin-bottom: 50px;
  background-image: url('${props => props.url}');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin-top: 50px;

  @media only screen and (max-width: 1000px){
    height: 700px;
    background-image: url('${props => props.urlMobile}');
  }
`

const Hero = ({

  height = "100%",
  url ='/images/projects/MyLandlord/mylandlord_cover.png',
  urlMobile = '/images/projects/MyLandlord/mylandlord_cover_900.png',
  position = "top left",
  
}) => {
  return (
      <HeroImg 
        url = {url}
        urlMobile={urlMobile}
        position = {position}
        height={height}
      />
    );
}

export default Hero;
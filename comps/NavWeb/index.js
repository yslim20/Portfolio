import styled from 'styled-components';
import React from 'react';
import {useRouter} from 'next/router';

// ============ CSS ============== //
const Nav = styled.div`    
  height: ${props=>props.height};  
  width: 100%;
  min-width: 110px;
  border-bottom: solid 1px #999;
  box-sizing: border-box;
  display: flex;
  align-items:center;
  justify-content:center;
  cursor: pointer; 
  color: #999;
  background-color: #000;
`;

const Content = styled.h6`
  line-height: ${props=>props.lineH}px;
  color: ${props=>props.color};

  :hover {
    color:#2CCCC3; 
  }

  :active {
    color: #2CCCC3;
  }
`

// ============ Layout
const NavWeb =({

// ============ Props  
  height = "7.81vh",
  color="#999",

})=>{
  
  const router = useRouter();
  if(router.pathname === "/Web") 
  {
    return (
      <Nav 
        onClick={() => router.push("/Web")}
        height={height}      
      >            
        <Content               
          color= "#2CCCC3"
        >
          Web
        </Content>
      </Nav>
    );
  }
  
// ============ Layout
  return (
    <Nav 
      onClick={() => router.push("/Web")}
      height={height}      
    >            
      <Content               
        color={color}
        lineH={height}   
      >
        Web
      </Content>
    </Nav>
  );
}

export default NavWeb;
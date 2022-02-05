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

  :hover h6{
    color:#2CCCC3; 
  }

  :active h6{
    color: #2CCCC3;
  }
`;

const Content = styled.h6`
  line-height: ${props=>props.lineH}px;
  color: ${props=>props.color};
  
`

// ============ Layout
const NavContact =({

// ============ Props  
  height =  "8.5vh",
  color="#999",

})=>{
  
  const router = useRouter();
  if(router.pathname === "/Contact") 
  {
    return (
      <Nav 
        onClick={() => router.push("/Contact")}
        height={height}      
      >            
        <Content               
          color= "#2CCCC3"
        >
          Contact
        </Content>
      </Nav>
    );
  }
  
// ============ Layout
  return (
    <Nav 
      onClick={() => router.push("/Contact")}
      height={height}      
    >            
      <Content               
        color={color}
        lineH={height}  
      >
        Contact
      </Content>
    </Nav>
  );
}

export default NavContact;
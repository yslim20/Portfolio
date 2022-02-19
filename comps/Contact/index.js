import styled from 'styled-components';
import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from "@/utils/provider";
import { themes, lylac, medBlue, lightTxt } from '@/utils/variables';
import Button from '@/comps/Button'

// ============ CSS ============== //
const Cont = styled.div`    
  height: auto;  
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  box-sizing: border-box;
`

const SubTitle = styled.h5`
  width: 100%;
  margin-bottom: 20px;
  color: ${props => props.titColor};
  transition: all 0.3s;

  @media only screen and (min-width: 461px) and (max-width:1000px){    
    margin-bottom: 50px;
  }

  @media only screen and (min-width: 1px) and (max-width:460px){    
    font-size: 1.25em;
    font-weight: 700; 
    margin-bottom: 30px;
  }
`

const ContTitle = styled.h2`
  color : ${props => props.color}; 
  line-height: 1.5em;
  margin-bottom: 1rem;

  :after {
    content:"Get in touch...";
    -webkit-animation: spintit 5s linear infinite;
       -moz-animation: spintit 5s linear infinite;
        -ms-animation: spintit 5s linear infinite;
         -o-animation: spintit 5s linear infinite;
            animation: spintit 5s linear infinite; 
  }

  @keyframes spintit {
    0% { content:" Get in touch...";}
    50% { content: "with me 📫"; }
  }

  @media only screen and (min-width: 601px) and (max-width:1400px){    
    font-size: 3em;
    line-height: 1.5em;
  }

  @media only screen and (min-width: 1px) and (max-width:600px){    
    font-size: 2em;
  }
`

const Content = styled.p`
  line-height: 1.5em;
  color: ${props=>props.color};
  margin-bottom: 30px;

  @media only screen and (min-width: 1px) and (max-width: 1000px){    
    font-size: 0.875em;
  }
`

const Form = styled.form`
  width: 100%;
`
const Input = styled.input`
  width: 100%; height: 2em;
  padding: 0 1em;
  box-sizing: border-box;
  margin-bottom: 25px;  
`

const TextArea = styled.textarea`
  width: 100%; height: 150px;
  padding: 1em;
  box-sizing: border-box;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`

const BttnCont = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

// ============ Layout
const Contact =({

// ============ Props  
  text ="I would be happy to hear from you if you have any potential opportunities, requests, or questions about me.",
})=>{

  const {theme, setTheme} = useTheme();

// ============ Layout
  return (
    <Cont> 
      <SubTitle titColor = {lylac[theme]}>
        Contact     
      </SubTitle>

      <ContTitle
        color = {medBlue[theme]}
      />

      <Content               
        color={lightTxt[theme]}
      >
        {text}
      </Content>

      <Form action="mailto:yslim.bcit@gmail.com" method="post" enctype="text/plain">
        <Input type="text" name="name" placeholder='Name' required />
        <Input type="text" name="email" placeholder='Email' required />
        <TextArea type="text" name="comment" placeholder='Comment' required />
        <BttnCont>
          <Button 
            type="reset" 
            text="Cancel" 
            width='100%'
            marginright = "20"
            bgcolor = "#fff"
          />
          <Button 
            type="submit"
            text="Email me"
            width='100%'
            bgcolor = "#fff"
          />
        </BttnCont>
      </Form>
    </Cont>
  );
}

export default Contact;
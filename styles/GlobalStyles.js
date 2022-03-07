import { createGlobalStyle } from 'styled-components';

import reset from 'styled-reset';

const globalStyles = createGlobalStyle`
    ${reset};    

    html, body {
      margin: 0;
      padding: 0;
      font-family: 'VisbyCF', Verdana, Tahoma, sans-serif;
    }

    h1, h2, h3, h4, h5, h6, p {      
      margin: 0;
      color: #181818;
    }

    h1 {
      font-size: 6em;
      font-weight: 600;
    }

    h2 {
      font-size: 4.5em; 
      font-weight: 600; 
    }

    h3 {
      font-size: 3em;
      font-weight: 600; 
      margin-bottom: 0.25em;;
    }

    h4 {
      font-size: 2.125em;
      font-weight: 600; 
    }

    h5 {
      font-size: 1.5em;
      font-weight: 600; 
    }

    h6 {
      font-size: 1.25em;
      font-weight: 400; 
    }

    body, p {
      font-size: 1em;
      font-weight: 300;       
    }

    p {
      line-height: 1.4em;
    }

    .subtitle {
      font-size: 0.875em;
      font-weight: 400; 
    }

    button {
      font-weight: 700
    }

    .body2{
      font-size: 0.875em;
      font-weight: 300;
    }

    /* Font ends */

    /* STYLE */
    ul{
      list-style-type: none;
    } 

    a, img, span {
      display: block;
    }

    a {
      text-decoration: none;
    }

    textarea:focus, input:focus {
      color: #5550F2;
    }
    
    input, select, textarea{
      color: #181818;
      font-size: 1em;
    }

    iframe,
    object {
      width: 100%;
      height: 100vh;
      background-color: #fff;
    }

    .new-line {
      white-space: pre-line;
      color: #202020;
    }
`;

export default globalStyles;
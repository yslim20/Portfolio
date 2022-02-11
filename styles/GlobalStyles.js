import { createGlobalStyle } from 'styled-components';

import reset from 'styled-reset';

const globalStyles = createGlobalStyle`
    ${reset};    

    html, body {
      margin: 0;
      padding: 0;
    }

    h1, h2, h3, h4, h5, h6, p {
      /* font-family: 'VisbyCF', Verdana, Tahoma, sans-serif; */
      margin: 0;
      color: #181818;
    }

    h1 {
      font-size: 6em;
      font-weight: 700;
    }

    h2 {
      font-size: 4.5em; 
      font-weight: 700; 
    }

    h3 {
      font-size: 3em;
      font-weight: 700; 
      margin-bottom: 0.25em;;
    }

    h4 {
      font-size: 2.125em;
      font-weight: 700; 
    }

    h5 {
      font-size: 1.5em;
      font-weight: 700; 
    }

    h6 {
      font-size: 1.25em;
      font-weight: 400; 
    }

    body, p {
      font-size: 1em;
      font-weight: 300; 
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


    /* .title {
      font-family: 'Heebo', sans-serif;
      font-size: 20px;
      font-weight: 500;
    }

    .link{
      font-family: 'Heebo', sans-serif;
      font-size: 16px;
      font-weight: 300;
      text-decoration: underline;
    }  */
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
`;

export default globalStyles;
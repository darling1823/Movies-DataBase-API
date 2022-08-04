import React, {Component} from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import Header from './Components/Header.js';
import Main from './Components/Main.js';

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`


export default class ToDo extends Component{
  render(){
    return(
       <body>
        <GlobalStyle/>
        <Header/>
        <Main/>
       </body>
    )
  }
}

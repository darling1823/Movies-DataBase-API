import React, {Component} from 'react';
import styled from 'styled-components';
import Header from './Components/Header.js';
import Main from './Components/Main.js';

const Container = styled.div`
  background-color: #730C02;
  width: 100vw;
  height: 1190px;
  display:flex;
  justify-content: center;
`


export default class Challenge extends Component{
  render(){
    return(
       <Container>
        <Header/>
        <Main/>
       </Container>
    )
  }
}

import React, {Component} from 'react';
import styled, {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style:none;
  }
`;

const Container = styled.div`
  background: #DB5461;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
`;

const H1 = styled.h1`
    font-family: 'Square Peg', cursive;
    font-size: 10vw;
    color: #FAF3DD;
`;

const H2 = styled.h2`
    font-family: 'Karla', sans-serif;
    font-weight: 200;
    font-style: italic;
    font-size: 2vw;
    color: #FAF3DD;
    margin-bottom: 1.5vw;
`;

const NAV = styled.nav`
    background: #4056F4;
    width: 100vw;
`

const UL = styled.ul`
    display:flex;
    height: 2vw;
    align-items: center;
    justify-content: space-evenly;
`

const LI = styled.li`
    font-family: 'Karla', sans-serif;
    font-weight: 300;
    font-size: 1.5vw;
    width: 8.5vw;
    display: flex;
    justify-content: center;
    color: #FAF3DD;
    &:hover{
        cursor: pointer;
        font-weight: 400;
    }
`



export default class Header extends Component{
    render(){
        return(
            <header>
            <GlobalStyle/>
            <Container>
                <H1>#todo</H1>
                <H2>your best option to organize your todo list!</H2>
                <NAV>
                    <UL>
                        <LI>home</LI>
                        <LI>howto</LI>
                        <LI>socialmedia</LI>
                        <LI>login</LI>
                    </UL>
                </NAV>
            </Container>
            </header>
        )
    }
}
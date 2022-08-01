import React, { Component } from 'react';
import styled from 'styled-components';
import burguer from './data/ingles.png';
import purse from './data/2.png';

const Navigation = styled.div`
    background-color: #D9CA7E;
    border-radius: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80vw;
    height: 40px;
    position: absolute;
    top: 50px;
    z-index: 1;
`
const MenuContainer = styled.figure` 
    width: 10vw;
    overflow: hidden;
`

const Menu = styled.img`
    width: 25px
`

const Title = styled.h1`
    font-size: 5vw;
`

const Cart = styled.img`
    width: 25px;
`

export default class Header extends Component {
    render(){
        return(
            <Navigation>
                <MenuContainer>
                <Menu src={burguer} alt='menu'/>
                </MenuContainer>
                <Title>flavo</Title>
                <MenuContainer>
                <Cart src={purse} alt="menu"/>
                </MenuContainer>
            </Navigation>
        )
    }
}
import { toBePartiallyChecked } from '@testing-library/jest-dom/dist/matchers';
import React, {Component} from 'react';
import styled from 'styled-components';
import product from './data/intensity.png'

const Container = styled.div`
    background-color: #D94350;
    width: 88vw;
    position: relative;
    z-index: 0;
    top: 15px;
    border: solid  10px;
    border-radius: 50px;
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 1130px;
    font-family: 'Nanum Gothic', sans-serif;
`

const ProductContainer = styled.figure`
    margin-top: 20vw;
    display: flex;
    justify-content: center;
    width: 40vw;
`

const Product = styled.img`
    width: 250px;
    height: 360px;
`

const PriceContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80vw;
`

const Price = styled.h1`
    font-weight: 400;
`

const AboutContainer = styled.div`
    width: 80vw;
    display:flex;
    flex-direction:column;
`

const AboutText = styled.h2`
    font-weight: 100;
`

const ChooseContainer = styled.div`
    width: 90vw;
    display:flex;
    align-items:center;
    justify-content: space-evenly;
`

const Choose = styled.h2`
    font-weight: 100;
    font-size: 7vw;
`

const ChooseButton = styled.button`
    background-color: #D94350;
    width: 5vw;
    height: 20px;
    border-radius: 60px;
    &:hover{
        cursor: pointer;
    }
`
const BuyContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80vw;
    height: 50px;
    border: solid 1px;
    border-radius: 60px;
    overflow: none;
`

const BuyButton = styled.button`
    font-size: 5vw;
    background-color: #D94350;
    border: none;
    border-radius: 60px;
    &:hover{
        cursor: pointer;
    }
`

const BuyNumber = styled.h2`
    font-weight: 200;
`

const FinishButton = styled.button`
    margin-top: 5vw;
    width: 80vw;
    height: 50px;
    border-radius: 60px;
    font-size: 5vw;
    background-color: black;
    color: white;
    margin-bottom: 5vw;
    &:hover{
        cursor: pointer;
    }
`

export default class Main extends Component{

    state = {
        bag: '#D94350',
        jar: '#D94350',
        number: 1,
    }

    Bag = () => {
        if(this.state.jar == "#D94350"){
        if(this.state.bag == "#D94350"){
        this.setState({
            bag: document.getElementsByTagName('button')[0].style.backgroundColor = "black"
        })}else{
            this.setState({bag: document.getElementsByTagName('button')[0].style.backgroundColor = '#D94350'})
        }}
    }

    Jar = () => {
        if(this.state.bag == "#D94350"){
        if(this.state.jar == "#D94350"){
        this.setState({
            jar: document.getElementsByTagName('button')[1].style.backgroundColor = "black"
        })}else{
            this.setState({
                jar: document.getElementsByTagName('button')[1].style.backgroundColor = '#D94350'
            })
        }}
    }

    Add = () => {
        this.setState({
            number: this.state.number+1
        })
    }

    Del = () => {
        if(this.state.number > 1){
            this.setState({number: this.state.number-1})
        }
    }
    

    render(){
        return(
            <Container>
                <ProductContainer>
                    <Product src={product} alt='product'/>
                </ProductContainer>
                <PriceContainer>
                    <h1>INTENSITY</h1>
                    <Price>$15</Price>
                </PriceContainer>
                <AboutContainer>
                    <h2>WHAT'S INSIDE</h2>
                    <AboutText>Garlic, paprika, chili, annato</AboutText>
                    <h2>WHY WE LOVE IT</h2>
                    <AboutText>Original spice blends suitable for both home and professional cooking.</AboutText>
                </AboutContainer>
                <ChooseContainer>
                    <ChooseButton onClick={this.Bag}></ChooseButton>
                    <Choose>BAG(75g)</Choose>
                    <ChooseButton onClick={this.Jar}></ChooseButton>
                    <Choose>JAR(150g)</Choose>
                </ChooseContainer>
                <BuyContainer>
                    <BuyButton onClick={this.Del}>-</BuyButton>
                    <BuyNumber>{this.state.number}</BuyNumber>
                    <BuyButton onClick={this.Add}>+</BuyButton>
                </BuyContainer>
                <FinishButton>ADD TO CART</FinishButton>
            </Container>
        )
    }

}
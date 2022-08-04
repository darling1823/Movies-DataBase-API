import React, {Component} from 'react';
import styled from 'styled-components';

const MAIN = styled.main`
    display: flex;
    background: #FAF3DD;
    justify-content: center;
    height: 64.7vh;
`

const SECTION = styled.section`
    background: #1B1B3A;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    color: #FAF3DD;
    margin-top: 2vw;
    border-radius: 40px;
    height: 90%;
`

const H2 = styled.h2`
    font-family: 'Karla', sans-serif;
    font-style: italic;
    font-weight: 300;
    margin-top: 0.5vw;
    margin-bottom: 0.5vw;
`

const INPUT = styled.input`
    background: #DB5461;
    border: none;
    height: 50px;
    width: 50%;
    border-radius: 60px;
`
const BUTTON = styled.button`
    font-family: 'Karla', sans-serif;
    font-style: italic;
    margin-top: 0.5vw;
    margin-bottom: 0.5vw;
    font-size: 1vw;
    width: 25%;
    border: none;
    border-radius: 60px;
    background: #4056F4;
    color: #FAF3DD;
    &:hover{
        cursor: pointer;
    }
`

const DIV = styled.div`
    width: 50%;
    height: 74%;
    overflow: hidden;
`
const UL = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`

const LI = styled.li`
    font-family: 'Square Peg', cursive;
    font-size: 2vw;
`

const DELETE = styled.button`
    margin-right: 0.5vw;
    border: none;
    background: #4056F4;
    height: 40px;
    width: 40px;
    font-family: 'Karla', sans-serif;
    font-style: italic;
    font-size: 0.8vw;
    border-radius: 60px;
    color: #FAF3DD;
    &:hover{
        cursor: pointer;
    }
`

export default class Main extends Component{

    state = {
        tasks: "",
        add: [],
    }

    handleChange = (event) => {
        this.setState({
            tasks: event.target.value
        })
    };

    handleClick = () => {
        if(this.state.tasks !== ""){
        this.setState({
            add: this.state.add.concat({
                tasks: this.state.tasks,
                id: Math.random(),
            }),
            tasks: ""
        })}
    }

    delete = (id) => {
        this.setState({
            add: this.state.add.filter((item) => {
                return item.id !== id;
            })
        })
    }

    render(){
        return(
            <MAIN>
                <SECTION>
                    <H2>add your tasks here!</H2>
                    <INPUT value={this.state.tasks} onChange={this.handleChange} />
                    <BUTTON onClick={this.handleClick}>add</BUTTON>
                    <DIV>
                        {this.state.add.map((item) => (
                           <UL>
                            <DELETE onClick={() => {this.delete(item.id)}}>del</DELETE>
                             <LI>{item.tasks}</LI>
                           </UL>
                        ))}
                    </DIV>
                </SECTION>
            </MAIN>
        )
    }
}
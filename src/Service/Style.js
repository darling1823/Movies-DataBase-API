import styled from 'styled-components'

export const INPUT = styled.input`
    background-color: #FCA311;
    border-radius: 5px;
    border: none;
    width: 15vw;
    height: 20px;
    font-weight: 600;
    position: absolute;
    top: 143px;
    left: 1364px;
    &::placeholder{
        position: absolute;
        left: 10px;
        top: 3px;
        color: #14213D;
    }
`

export const SECTION = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #14213D;
    padding-top: 1vw;
    flex-wrap: wrap;
`

export const H2 = styled.h2`
    font-size: 3vw;
    color: #FCA311;
    font-weight: 500;
    text-align: center;
    background: #14213D;
`

export const DIV = styled.div`
    width: 40vw;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 400px;
    position: relative;
`

export const IMG = styled.img`
   border: solid 5px #FCA311;
`

export const TITLE = styled.li`
   margin-top: 1vw;
   margin-bottom: 1vw;
   font-style: italic;
   font-weight: 500;
   font-size: 1.5vw;
   color: #E5E5E5;
`

export const BUTTON = styled.div`
    border: none;
    background: black;
    color: #FCA311;
    font-weight: 600;
    width: 50%;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1vw;
    height: 25px;
    &:hover{
        cursor: pointer;
        color: #E5E5E5;
    }
`
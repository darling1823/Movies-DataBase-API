import styled from 'styled-components';

export const DIV = styled.div`
    background: #000000;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 2vw;
    padding-bottom: 2vw;
    flex-direction: column;
`

export const H1 = styled.h1`
    color: #FCA311;
    font-size: 5vw;
    font-weight: 600;
`

export const NAV = styled.nav`
   display: flex;
    width: 100vw;
    align-items:center;
    justify-content: space-evenly;
`

export const UL = styled.ul`
    margin-top: 1vw;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 75%;
`

export const LI = styled.li`
    font-size: 1.5vw;
    color: #E5E5E5;
    &:hover{
        cursor: pointer;
        color: #FCA311;
        font-style: italic;
        font-weight: 500;
    }
`

export const INPUT = styled.input`
    background-color: #FCA311;
    border-radius: 5px;
    border: none;
    width: 15vw;
    height: 20px;
    font-weight: 600;
    position: relative;
    &::placeholder{
        position: absolute;
        left: 10px;
        top: 3px;
        color: #14213D;
    }
`

export const SECTION = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #14213D;
    padding-top: 1vw;
`

export const H2 = styled.h2`
    font-size: 3vw;
    color: #FCA311;
    font-weight: 500;
    margin-bottom: 1vw;
`

export const H3 = styled.h3`
    font-size: 2vw;
    color: #E5E5E5;
    font-weight: 400;
    font-style: italic;
    margin-bottom: 1vw;
`

export const BOX = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    width: 100vw;
`

export const FIGURE = styled.figure`
    width: 50vw;
    overflow: hidden;
    display: flex;
    justify-content: center;
    height: 481px;
    border: solid 5px #FCA311;
    margin-bottom: 1vw;
    z-index: 1;
`

export const BACK = styled.figure`
    width: 30vw;
    overflow: hidden;
    height: 324px;
    position: absolute;
    z-index: 0;
    left: 30px;
    top: 80px;
`

export const GROUND = styled.figure`
    width: 30vw;
    overflow: hidden;
    height: 324px;
    position: absolute;
    z-index: 0;
    top: 80px;
    left: 1145px;
`

export const DEATH = styled.img`
    width: 510px;
    opacity: 0.5;
`

export const DESIRE = styled.img`
    width: 600px;
    opacity: 0.5;
`

export const SECOND = styled.img`
    opacity: 0.5
`

export const THIRD = styled.img`
    opacity: 0.5;
    width: 700px;
`

export const CONTAINER = styled.div`
    display: flex;
    width: 75%;
    justify-content: space-evenly;
    margin-bottom: 1vw;
`

export const BUTTON = styled.div`
    border: none;
    background: black;
    color: #FCA311;
    font-weight: 600;
    width: 30%;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5vw;
    height: 50px;
    &:hover{
        cursor: pointer;
        color: #E5E5E5;
    }
`

export const LINK = styled.a`
    text-decoration: none;
    color: #FCA311;
    &:hover{
        color: #E5E5E5;
    }
`

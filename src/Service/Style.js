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
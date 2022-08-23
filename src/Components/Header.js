import React, {Component} from 'react'
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'
import * as S from './Style'
import TVShows from '../Service/TVShows.js' 
import Movies from '../Service/Movies.js'
import styled, {createGlobalStyle} from 'styled-components'
import Home from './Home.js'

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&display=swap');
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: 'Nunito', sans-serif;
}
`

export default class Header extends Component{

    render(){
        return(
            <div>
            <GlobalStyle/>
            <BrowserRouter>
            <S.DIV>
                <S.H1>Upside Down Reviews</S.H1>
                <S.NAV>
                    <S.UL>
                        <S.LI><Link to='/'>Home</Link></S.LI>
                        <S.LI><Link to='/series'>Shows</Link></S.LI>
                        <S.LI><Link to='/movies'>Movies</Link></S.LI>
                    </S.UL>
                    <S.INPUT placeholder='Find the reviews here!'/>
                </S.NAV>
            </S.DIV>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/series' element={<TVShows/>}/>
                    <Route path='/movies' element={<Movies/>}/>
                </Routes>
            </BrowserRouter>
            </div>
        )
    }
}
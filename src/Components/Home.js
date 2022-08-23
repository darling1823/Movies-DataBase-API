import React, {Component} from 'react'
import sandman from '../data/sandman.png'
import sandman2 from '../data/sandman2.png'
import sandman3 from '../data/sandman3.png'
import strangerThings2 from '../data/strangerthings2.jpg'
import strangerThings from '../data/strangerthings.png'
import strangerThings3 from '../data/strangerthings3.png'
import severance from '../data/severance.jpg'
import severance2 from '../data/severance2.jpg'
import severance3 from '../data/severance3.png'
import * as S from './Style'

export default class Home extends Component{
    render(){
        return(
            <S.SECTION>
                <S.H2>Top Popular Shows on 2022 (My Opinion)</S.H2>
                <S.H3>The Sandman (2022)</S.H3>
                <S.BOX>
                    <S.BACK>
                        <S.DEATH src={sandman2} alt='Sandman'/>
                    </S.BACK>
                    <S.FIGURE>
                        <img src={sandman} alt='Sandman'/>
                    </S.FIGURE>
                    <S.GROUND>
                        <S.DESIRE src={sandman3} alt='Desire'/>
                    </S.GROUND>
                </S.BOX>
                <S.CONTAINER>
                    <S.BUTTON>REVIEW (COMING SOON)</S.BUTTON>
                    <S.BUTTON><S.LINK href='https://www.youtube.com/watch?v=fUg4xE-7LyM&ab_channel=NetflixBrasil' target='_blank'>TRAILER</S.LINK></S.BUTTON>
                </S.CONTAINER>
                <S.H3>Stranger Things (2016)</S.H3>
                <S.BOX>
                    <S.BACK>
                        <S.SECOND src={strangerThings2} alt='Stranger Things'/>
                    </S.BACK>
                    <S.FIGURE>
                        <img src={strangerThings} alt='Stranger Things'/>
                    </S.FIGURE>
                    <S.GROUND>
                        <S.THIRD src={strangerThings3} alt='Stranger Things'/>
                    </S.GROUND>
                </S.BOX>
                <S.CONTAINER>
                    <S.BUTTON>REVIEW (COMING SOON)</S.BUTTON>
                    <S.BUTTON><S.LINK href='https://www.youtube.com/watch?v=otutSrxYpa4&ab_channel=NetflixBrasil' target='_blank'>TRAILER</S.LINK></S.BUTTON>
                </S.CONTAINER>
                <S.H3>Severance (2022)</S.H3>
                <S.BOX>
                    <S.BACK>
                        <S.SECOND src={severance2} alt='Severance'/>
                    </S.BACK>
                    <S.FIGURE>
                        <img src={severance} alt='Severance'/>
                    </S.FIGURE>
                    <S.GROUND>
                        <S.THIRD src={severance3} alt='Severance'/>
                    </S.GROUND>
                </S.BOX>
                <S.CONTAINER>
                    <S.BUTTON>REVIEW (COMING SOON)</S.BUTTON>
                    <S.BUTTON><S.LINK href='https://www.youtube.com/watch?v=xEQP4VVuyrY&ab_channel=AppleTV' target='_blank'>TRAILER</S.LINK></S.BUTTON>
                </S.CONTAINER>
            </S.SECTION>
        )
    }
}
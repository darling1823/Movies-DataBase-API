import React, {Component} from 'react'
import * as S from './Style'

export default class Footer extends Component{
    render(){
        return(
            <S.DIV>
                <S.H2>If you can't find the reviews here, check our social media!</S.H2>
                <S.NAV>
                    <S.UL>
                        <S.LI>Facebook</S.LI>
                        <S.LI>Twiter</S.LI>
                        <S.LI>Instagram</S.LI>
                        <S.LI>Youtube</S.LI>
                    </S.UL>
                </S.NAV>
            </S.DIV>
        )
    }

}
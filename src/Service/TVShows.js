import React, {Component} from 'react';
import axios from 'axios';
import * as S from './Style'

const API = axios.create({
    baseURL:'https://api.themoviedb.org/3/tv/popular?api_key=1a3030f1b7094958e943f2e4e378cf63&language=en-US&page=1'
})

export default class TVShows extends Component{
    state = {
        shows: [],
        search: []
    }

    componentDidMount(){
        this.getSeries()
    }

    getSeries = async() => {
        const dados = await API.get()
        const all = dados.data.results.map((item)=>{
            return{
                ...item,
                poster: `https://image.tmdb.org/t/p/w500${item.backdrop_path}`
            }
        })
        this.setState({
            shows: all,
            search: all
        })

        console.log(dados)
       
    }

    handleChange = (e) => {
        const Pesquisa = this.state.shows.filter((item)=>{
            if(item.original_name.toLowerCase().includes(e.target.value.toLowerCase())){
                return true
            }else{
                return ""
            }
        })
        this.setState({
            search: Pesquisa
        })
    }

    render(){
        return(
            <div>
                <S.INPUT placeholder='Find the reviews here!' onChange={this.handleChange}/>
                <S.H2>Shows</S.H2>
                <S.SECTION>
                
                {this.state.search.map((item, index)=>(
                    
                    <S.DIV>
                    <S.IMG src={item.poster} alt={item.original_name}/>
                    <ul key={index}>
                        <S.TITLE>{item.original_name}</S.TITLE>
                    </ul>
                    <S.BUTTON>REVIEW (COMING SOON)</S.BUTTON>
                    </S.DIV>
                    
                ))}
                </S.SECTION>
            </div>
        )
    }
}


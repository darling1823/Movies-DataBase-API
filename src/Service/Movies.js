import React, {Component} from 'react';
import axios from 'axios';
import * as S from './Style'
import error from '../data/error.png'

const API = axios.create({
    baseURL:'https://api.themoviedb.org/3/movie/popular?api_key=1a3030f1b7094958e943f2e4e378cf63&language=en-US&page=1'
})

export default class Movies extends Component{
  state = {
    filmes: [],
    search: []
  }

  componentDidMount(){
    this.getFilmes()
  }

  getFilmes = async() => {
    const dados = await API.get()
    const allFilmes = dados.data.results.map((item)=>{
      return{
        ...item,
        imagem: `https://image.tmdb.org/t/p/w500${item.backdrop_path}`
      }
    })
    this.setState({
      filmes: allFilmes,
      search: allFilmes
    })
  }

  handleChange = (e) => {
    const Pesquisa = this.state.filmes.filter((item) => {
      if(item.original_title.toLowerCase().includes(e.target.value.toLowerCase())){
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
        <S.H2>Movies</S.H2>
        <S.SECTION>
        {this.state.search.map((item, index)=>(
          <S.DIV>
            <S.IMG src={item.imagem} alt={item.original_title}/>
            <ul key={index}>
              <S.TITLE>{item.original_title}</S.TITLE>
            </ul>
            <S.BUTTON>REVIEW (COMING SOON)</S.BUTTON>
          </S.DIV>
        ))}
        </S.SECTION>
      </div>
    )
  }

}
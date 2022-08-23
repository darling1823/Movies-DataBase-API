import React, {Component} from 'react';
import axios from 'axios';
import * as S from './Style'

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
        <S.SECTION>
        <S.H2>Movies</S.H2>
        {this.state.search.map((item, index)=>(
          <div>
            <img src={item.imagem} alt={item.original_title}/>
            <ul key={index}>
              <li>{item.original_title}</li>
              <li>{item.overview}</li>
            </ul>
          </div>
        ))}
        </S.SECTION>
      </div>
    )
  }

}
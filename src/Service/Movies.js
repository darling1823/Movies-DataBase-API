import React, {Component} from 'react';
import axios from 'axios';

const API = axios.create({
    baseURL:'https://api.themoviedb.org/3/movie/popular?api_key=1a3030f1b7094958e943f2e4e378cf63&language=en-US&page=1'
})

export default class Movies extends Component{
  state = {
    filmes: []
  }

  componentDidMount(){
    this.getFilmes()
  }

  getFilmes = async() => {
    const dados = await API.get()
    const allFilmes = dados.data.results.map((item)=>{
      return{
        ...item,
        nome: item.original_title,
      }
    })
    this.setState({
      filmes: allFilmes
    })
  }

  render(){
    return(
      <div>
        {this.state.filmes.map((item, index)=>(
          <ul key={index}>
            <li>{item.nome}</li>
          </ul>
        ))}
      </div>
    )
  }

}
import React, {Component} from 'react';
import axios from 'axios';

const API = axios.create({
    baseURL:'https://api.themoviedb.org/3/movie/popular?api_key=1a3030f1b7094958e943f2e4e378cf63&language=en-US&page=1'
})

export default class Movies extends Component{
  render(){
    return(
      <div>
        
      </div>
    )
  }

}
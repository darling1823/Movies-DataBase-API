import React, {Component} from 'react';
import Header from './Components/Header.js'
import Footer from './Components/Footer.js'

export default class App extends Component{
  render(){
    return(
      <div>
        <Header />
        <Footer />
      </div>
    )
  }

}
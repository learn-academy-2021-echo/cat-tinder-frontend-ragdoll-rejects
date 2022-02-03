import React, { Component } from 'react'
import cuteasscat from '../assets/cuteasscat.png'

class Home extends Component{
  render(){
    return(
      <>
      <h1><strong>Welcome to Cat Tinder! 
        <br></br>
        There's hot cougars in your area! 🐈</strong></h1>
        <img src={cuteasscat} alt="cat outline" className="cuteasscat" />
        <p>😽Join us to find some hot tail near you 😻</p>
        </>
      )
  }
}

export default Home;

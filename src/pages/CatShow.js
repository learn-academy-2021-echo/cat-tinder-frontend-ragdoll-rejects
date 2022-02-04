import React, { Component } from 'react';

class CatShow extends Component {
  render() {

    const { cat } = this.props
    return (
      <>
          <h1>Check out this purrdy cat.</h1>
            <p>Kitty name: {cat ? cat.name : null }</p>
            <p>Kitty oldnes: {cat ? cat.age : null}</p>
            <p>Kitty like: {cat ? cat.enjoys : null}</p>
            { cat ? <img src={cat.image} alt="cats are sick" width=" 200px"/> : null}
      </>
    );
  }
}
export default CatShow

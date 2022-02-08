import React, { Component } from 'react';
import { Card, CardTitle, Col, CardText, Button, NavLink } from "reactstrap";

class CatShow extends Component {
  render() {

    const { cat } = this.props
    return (
      <>
          <h1>Check out this purrdy cat.</h1>
            <p>Kitty name: {cat ? cat.name : null }</p>
            <p>Kitty oldness: {cat ? cat.age : null}</p>
            <p>Kitty like: {cat ? cat.enjoys : null}</p>
            { cat ? <img src={cat.image} alt="cats are sick" width=" 200px"/> : null}
            <NavLink to="/catindex">
              <Button>
                Delete Kitty Profile
              </Button>
            </NavLink>
      </>
    );
  }
}
export default CatShow

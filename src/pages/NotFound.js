import React, { Component } from "react";
import awwrats from "../components/assets/awwrats.png";
class NotFound extends Component {
  render() {
    return (
      <div id="notFound404">
        <h3>Awww RATS!! No Cats here!</h3>
        <img src={awwrats} alt="rats are not cats!" className="cat-frienemy" />
      </div>
    );
  }
}
export default NotFound;

//revisit to add styling
// add 404 image

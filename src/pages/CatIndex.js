import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Card, CardTitle, Col } from "reactstrap";

class CatIndex extends Component {
  render() {
    return (
      <>
        <h1>We got all the cats right here 🙀</h1>
        <h3>Meet the Cats!</h3>
        <br />
          {typeof this.props.cats !== "undefined" ? (
            this.props.cats.map((cat) => {
              return (
                <NavLink to={`/catshow/${cat.id}`} key={cat.id}>
                  <p>{cat.name}</p>
                </NavLink>
              );
            })
         ):(
           <p>Cat not find it.</p>
         )}
     </>
    );
  }
}
export default CatIndex;

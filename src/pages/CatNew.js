import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from 'reactstrap';


class CatNew extends Component {
  constructor(props){
    super(props)
    this.state = {
     newKitten: {
      name: "",
      age: "",
      enjoys:"",
      img: ""
     },
     submitted: false
    }
  }

  handleChange = (e) => {
    let { newKitten } = this.state
    // console.log(e.target.value)
    newKitten[e.target.name] = e.target.value
    this.setState({newKitten: newKitten})
  }

  handleSubmit = () => {
    this.props.createCat(this.state.newKitten)
    this.setState({submitted: true})
  }

  render() {

    return (
      <>
        <h2>Become our latest kitty 😻</h2>
        <Form>
          <FormGroup>
            <Label for="name">
              Kitty Name
            </Label>
            <Input
              name="name"
              placeholder="What kitty name is?"
              type="text"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="age">
              Kitty Age
            </Label>
            <Input
              name="age"
              placeholder="How oldness of kitty?"
              type="number"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="enjoys">
              Kitty like do
            </Label>
            <Input
              name="enjoys"
              placeholder="What kitty likes to do?"
              type="text"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="img">
              Kitty Profile Picture
            </Label>
            <Input
              name="img"
              type="url"
              onChange={this.handleChange}
            />
          </FormGroup>
          <Button onClick={this.handleSubmit} name='submit'> Add a New Kitty</Button>
        </Form>
        {this.state.submitted && <Redirect to='/catindex'/>}

      </>
      );
  }
}
export default CatNew

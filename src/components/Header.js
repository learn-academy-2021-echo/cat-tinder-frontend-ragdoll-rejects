import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
// import catLogo from '../assets/cat-logo.png'

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    return (
      <div className="light-blue">
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Cat Tinder</NavbarBrand>
          {/* <img src={catLogo} alt="" height="50px"/> */}
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">My Profile</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="https://github.com/learn-academy-2021-echo/cat-tinder-ragdoll-rejects">
                  GitHub
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://www.aspca.org/">ASPCA</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu end>
                  <DropdownItem>Josh's Github</DropdownItem>
                  <DropdownItem>Deon's Github</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Reset</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
export default Header;

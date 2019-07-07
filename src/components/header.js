
import React from 'react';
import logo from '../images/ja-logo-brown.png'
import { Collapse, Container, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <header>
        <Navbar 
        id="main-nav"
        color="dark" dark expand="sm" fixed="top" className="border-bottom box-shadow">
          <Container>
            <NavbarBrand href="/" className="mr-auto">
              <img className="img-fluid logo" src={logo}
                        alt="JA Logo" />
            </NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse isOpen={!this.state.collapsed} navbar>
              <Nav navbar className="flex-grow-1">
                <NavItem>
                  <NavLink href="/">Resume</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Skills</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Education</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Work Experience</NavLink>
                </NavItem>
              </Nav>
              <Nav navbar>
                <NavItem>
                  <NavLink href="https://www.linkedin.com/in/jacob-ashcraft-21a7b595/" target="_blank" title="Linkedin">
                    <i className="d-inline icon fab fa-linkedin"></i>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/TechReaderJake" target="_blank" title="Github Primary">
                    <i className="d-inline icon fab fa-github-square"></i>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/Chillica" target="_blank" title="Github Secondary">
                    <i className="d-inline icon fab fa-github-square"></i>
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}
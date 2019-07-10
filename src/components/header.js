
import React from 'react';
import logo from '../images/ja-logo-brown.png'
import { StaticQuery, graphql } from "gatsby"
import { Collapse, Container, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

class Header extends React.Component {
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
    const { data } = this.props;
    const resume = data.allResumeJson.nodes[0].basics.profiles;
    const profiles = resume
    .filter(el => el.active === true)
    .map(item => (
      <NavItem key={item.url}>
        <NavLink href={item.url} target="_blank" title={item.network}>
          <i className={"d-inline icon fab " + item.icon}></i>
        </NavLink>
      </NavItem>
    ))
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
                  <NavLink href="/skills">Skills</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/education">Education</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/experience">Work Experience</NavLink>
                </NavItem>
              </Nav>
              <Nav navbar>
                {profiles}
              </Nav>
            </Collapse> 
          </Container>
        </Navbar>
      </header>
    );
  }
}

export default props => (
  <StaticQuery
    query={
      graphql` {
        allResumeJson {
          nodes {
            basics {
            profiles {
              active
              url
              network
              icon
            }
          }
          }
        }
      }`
    }
    render={data => <Header data={data}{...props} />}
  />
);
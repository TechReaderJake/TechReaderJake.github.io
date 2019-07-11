
import React from 'react';
import logo from '../images/ja-logo-brown.png'
import { StaticQuery, graphql, Link } from "gatsby"
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
        color="dark" dark expand="md" fixed="top" className="border-bottom box-shadow">
          <Container>
            <NavbarBrand href="/" className="mr-auto">
              <img className="img-fluid logo" src={logo}
                        alt="JA Logo" />
            </NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse isOpen={!this.state.collapsed} navbar>
              <Nav navbar className="flex-grow-1">
                <NavItem>
                  <Link className="nav-link" activeClassName="active" to="/letter">Cover Letter</Link>
                </NavItem>
                <NavItem>
                  <Link className="nav-link" activeClassName="active" to="/experience">Work Experience</Link>
                </NavItem>
                <NavItem>
                  <Link className="nav-link" activeClassName="active" to="/education">Education</Link>
                </NavItem>
                <NavItem>
                  <Link className="nav-link" activeClassName="active" to="/skills">Skills</Link>
                </NavItem>
                <NavItem>
                  <Link className="nav-link" activeClassName="active" to="/blog">Blog</Link>
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
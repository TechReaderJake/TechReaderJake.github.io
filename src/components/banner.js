
import React from 'react';
import logo from '../images/ja-logo-brown.png'
import { Collapse, Container, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
    <div className="row mb-4 sticky-top bg-white">
        <div className="col-lg-8">
            <h1 className="head">Jacob Ashcraft</h1>
            <p className="subhead d-md-block d-none">Software Engineer - Web Development and Media Design</p>
        </div>
        <div className="col-lg-4 d-md-flex justify-content-lg-end">
            <p className="subhead align-self-md-center text-lg-right">resume@jacobashcraft.com<br /> Sanpete County,
                UT</p>
        </div>
        <i id="toggle-nav" className="nav-arrow fa fa-arrow-circle-down"></i>
    </div>
    );
  }
}
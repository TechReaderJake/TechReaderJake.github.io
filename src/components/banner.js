
import React from 'react';
import { Row, Col } from 'reactstrap';

export default class Header extends React.Component {

  render() {
    return (
    <Row id="banner" className="row mb-4 sticky-top bg-white">
        <Col lg="8">
            <h1 className="head">Jacob Ashcraft</h1>
            <p className="subhead d-md-block d-none">Software Engineer - Web Development and Media Design</p>
        </Col>
        <Col lg="4" className="d-md-flex justify-content-lg-end">
            <p className="subhead align-self-md-center text-lg-right">resume@jacobashcraft.com<br /> Sanpete County,
                UT</p>
        </Col>
        {/* <i id="toggle-nav" className="nav-arrow fa fa-arrow-circle-down"></i> */}
    </Row>
    );
  }
}
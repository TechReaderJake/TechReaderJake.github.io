
import React from 'react';
import { StaticQuery, graphql } from "gatsby"
import { Row, Col } from 'reactstrap';

class Banner extends React.Component {
  render() {
    const { data } = this.props;
    const resume = data.allResumeJson.nodes[0].basics;
    return (
      <Row id="banner" className="row mb-1 mb-md-4 sticky-top bg-white">
        <Col lg="8">
            <h1 className="head">{resume.name}</h1>
            <p className="subhead d-md-block d-none">{resume.label} - {resume.specialty}</p>
        </Col>
        <Col lg="4" className="d-md-flex justify-content-lg-end">
            <p className="subhead align-self-md-center text-lg-right">{resume.email}
            <br />{resume.location.county} County, {resume.location.region}</p>
        </Col>
        {/* <i id="toggle-nav" className="nav-arrow fa fa-arrow-circle-down"></i> */}
    </Row>
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
              email
              label
              location {
                county
                region
              }
              name
              specialty
            }
          }
        }
      }`
    }
    render={data => <Banner data={data}{...props} />}
  />
);
import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'
import Wrapper from '../components/Wrapper'
import SEO from '../components/SEO'
import { Text } from '../components/Commons'
import { Row, Col, Nav, NavItem, NavLink } from "reactstrap"

const Area = styled.div`
  margin-bottom: 1.2rem;
`
const Section = styled.section`
  margin-bottom: 1rem;
`
class ResumePage extends React.Component {
  renderList(arry) {
    var el = [];
    for (var i = 0; i < arry.length; i++)
      el.push(<li key={arry[i]}>{arry[i]}</li>);
    return el;
  }
  sectionTitle(format, title)
  {
    return (<Section><h2>{title}</h2>{format}</Section>);
  }
  renderEducation(arry, title) 
  {
    var format = arry.filter(el => el.active === true)
    .map(item => (
      <Area key={item.startDate}>
        <strong>{item.studyShort}, {item.area}</strong><br />
        {item.institution}, {item.location}<br />
        {item.startDate}-{item.endDate}
      </Area>
    ));
    return this.sectionTitle(format, title);
  }
  renderSection(arry, title) {
    var format = <ul className="pt-0 mt-0">
    {arry.filter(el => el.order > 0).sort(function(a, b){return a-b}).map(item => (
      <li key={item.order}>{item.name}</li>
    ))}
    </ul>;
    return this.sectionTitle(format, title);
  }
  renderArea(arry, title)
  {
    var format = 
      arry.filter(el => el.active === true)
      .map(item => (
      <Area key={item.position}>
        <strong>
          {item.position}, {item.startDate}-{item.endDate}
        </strong>
        <br />
        {item.name}, {item.location}
        <ul className="pt-0 mt-0">{this.renderList(item.highlights)}</ul>
      </Area>
    ));
    return this.sectionTitle(format, title);
  }
  render() {
    const resume = this.props.data.allResumeJson.nodes[0]
    const social = resume.basics.profiles
    const profiles = social
    .filter(el => el.active === true)
    .map(item => (
      <NavItem key={item.url}>
        <NavLink href={item.url} target="_blank" title={item.network}>
          <i className={"d-inline icon fab " + item.icon}></i>
        </NavLink>
      </NavItem>
    ))
    return (
      <Layout>
        <SEO title="Home - Resume" />
        <Wrapper>
          <Row id="banner" className="mb-1 mb-md-4">
          <Col lg="8">
              <h1 className="head">{resume.basics.name}</h1>
              <p className="subhead d-md-block d-none">{resume.basics.label} - {resume.basics.specialty}</p>
          </Col>
          <Col lg="4">
            <div className="d-md-flex justify-content-lg-end">
              <p className="subhead align-self-md-center text-lg-right">{resume.basics.email}
              <br />{resume.basics.location}</p>
            </div>
            <Nav className="justify-content-lg-end">{profiles}</Nav>
          </Col>
          </Row>
          <Row>
          <Col lg="8" className="order-lg-12">
              {this.sectionTitle(<Text>{resume.basics.summary}</Text>, "Introduction")}
              {this.renderArea(resume.work, "Experience")}
              {this.renderArea(resume.volunteer, "Leadership")}
          </Col>
          <Col lg="4" className="order-lg-1">
            {this.renderEducation(resume.education, "Education")}
            {this.renderSection(resume.courses, "Coursework")}
            {this.renderSection(resume.skills, "Skills")}
          </Col>
        </Row>
        </Wrapper>
      </Layout>
    )
  }
}

export default ResumePage
export const data = graphql`
  query {
    allResumeJson {
      nodes {
        basics {
          name
          label
          specialty
          email
          location
          summary
          profiles {
            active
            network
            icon
            url
          }
        }
        education {
          active
          area
          institution
          location
          studyShort
          startDate(formatString: "YYYY")
          endDate(formatString: "YYYY")
        }
        courses {
          name
          order
        }
        skills {
          name
          order
        }
        volunteer {
          active
          name
          location
          position
          highlights
          startDate(formatString: "YYYY")
          endDate(formatString: "YYYY")
        }
        work {
          active
          name
          location
          summary
          highlights
          position
          endDate(formatString: "YYYY")
          startDate(formatString: "YYYY")
        }
      }
    }
  }
`

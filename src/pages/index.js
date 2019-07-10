import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import { Row, Col } from "reactstrap"

class IndexPage extends React.Component {
  renderList(arry) {
    var el = []
    for (var i = 0; i < arry.length; i++)
      el.push(<li key={arry[i]}>{arry[i]}</li>)
    return el
  }
  renderArea(arry)
  {
      return arry.filter(el => el.active === true)
      .map(item => (
        <div key={item.position}>
          <strong>
            {item.position}, {item.startDate}-{item.endDate}
          </strong>
          <br />
          {item.name}, {item.location}
          <ul>{this.renderList(item.highlights)}</ul>
        </div>
      ))
  }
  render() {
    const resume = this.props.data.allResumeJson.nodes[0]
    return (
      <Layout>
        <SEO title="Home - Resume" />
        <Row>
          <Col lg="8" className="order-lg-12">
            <section>
              <h2>Indroduction</h2>
              <p>{resume.basics.summary}</p>
            </section>
            <section>
              <h2>Experience</h2>
              {this.renderArea(resume.work)}
            </section>
            <section>
              <h2>Leadership</h2>
              {this.renderArea(resume.volunteer)}
            </section>
          </Col>
          <Col lg="4" className="order-lg-1">
            <section>
              <h2>Education</h2>
              <div className="pl-4">
              <p>
                <strong>BS, Software Engineering</strong>
                <br />
                Snow College, Ephraim, UT
                <br />
                2017-Current
              </p>
              <p>
                <strong>AS, Computer Science</strong>
                <br />
                Snow College, Ephraim, UT
                <br />
                2014-2017
              </p>
              </div>
            </section>
            <section>
              <h2>Coursework</h2>
              <ul>
                <li>Fundamentals of Programming</li>
                <li>Object Oriented Programming</li>
                <li>Secure Coding</li>
                <li>Graphical User Interfaces</li>
                <li>Technical Writing</li>
                <li>Interpersonal Communication</li>
              </ul>
            </section>
            <section>
              <h2>Skills</h2>
              <ul>
                <li>C#</li>
                <li>C++</li>
                <li>Java</li>
                <li>HTML</li>
                <li>Writing</li>
                <li>CSS/SASS/LESS</li>
                <li>Javascript</li>
                <li>UI/UX</li>
                <li>Design</li>
                <li>Wordpress</li>
                <li>Docker</li>
                <li>Bash</li>
                <li>VMs</li>
                <li>Linux</li>
                <li>XML</li>
                <li>XSLT</li>
                <li>SQL</li>
                <li>Communication</li>
              </ul>
            </section>           
          </Col>
        </Row>
        {/* <script>
          var navbar = document.getElementById("main-nav");
          navbar.classList.add("d-none");
      </script> */}
      </Layout>
    )
  }
}

export default IndexPage
export const data = graphql`
  query {
    allResumeJson {
      nodes {
        basics {
          summary
        }
        education {
          area
          courses {
            active
            crn
            title
          }
          emphasis
          gpa
          institution
          location
          studyShort
          studyType
          startDate(formatString: "YYYY")
          endDate(formatString: "YYYY")
        }
        skills {
          keywords
          level
          name
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
          description
          highlights
          name
          location
          summary
          position
          endDate(formatString: "YYYY")
          startDate(formatString: "YYYY")
        }
      }
    }
  }
`

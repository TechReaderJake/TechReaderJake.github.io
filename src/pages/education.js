import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class Education extends React.Component {
  render() {
    //const resume = this.props.data.allResumeJson.nodes[0]
    return (
      <Layout>
        <SEO title="Skills" />
        <h1>Education</h1>

      </Layout>
    )
  }
}
export default Education
// export const data = graphql`
//   query {
//   }`

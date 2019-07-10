import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class Experience extends React.Component {
  render() {
    //const resume = this.props.data.allResumeJson.nodes[0]
    return (
      <Layout>
        <SEO title="Experience" />
        <h1>Experience</h1>
      </Layout>
    )
  }
}
export default Experience
// export const data = graphql`
//   query {
//   }`

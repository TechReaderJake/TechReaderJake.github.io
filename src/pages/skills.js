import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout-full"
import SEO from "../components/seo"

class Skills extends React.Component {
  render() {
    //const resume = this.props.data.allResumeJson.nodes[0]
    return (
      <Layout>
        <SEO title="Skills" />
        <h1>Skills</h1>

      </Layout>
    )
  }
}
export default Skills
// export const data = graphql`
//   query {
//   }`

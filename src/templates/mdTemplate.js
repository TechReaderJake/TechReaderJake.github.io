import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

class MdTemplate extends React.Component {
  render() {
    const { markdownRemark } = this.props.data // data.markdownRemark holds our post data
    const { frontmatter, html } = markdownRemark
    return (
        <Layout>
        <h1>{frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }} />
        </Layout>
    );
  }
}

export default MdTemplate
export const Templatequery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`

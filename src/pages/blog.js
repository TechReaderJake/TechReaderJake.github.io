import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"

class MdTemplate extends React.Component {
  render() {
    const content = this.props.data.allMarkdownRemark.edges;

    return (
      <Layout>
        {content.filter(post => (post.node.frontmatter.title.length > 0 && post.node.frontmatter.blog === "true"))
          .map(({ node: post}) => { 
            return (
              <div key={post.id}>
                <h1><Link to={post.frontmatter.path}>{post.frontmatter.title}</Link></h1>
                <h2>{post.frontmatter.date}</h2>
                <p>{post.excerpt}</p>
              </div>
            )})
        }
      </Layout>
    )
  }
}

export default MdTemplate
export const Templatequery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            blog
          }
        }
      }
    }
  }
`

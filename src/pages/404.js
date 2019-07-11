import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1 className="text-center">Page Not Found</h1>
    <p>Ohhhh… it appears the router hit a wall in the maze and lost your page. Sorry about that!
        It may also have been moved (or never actually existed at all).
        </p>
    <p>The sadness.</p>
  </Layout>
)

export default NotFoundPage

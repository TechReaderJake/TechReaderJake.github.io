/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Container } from "reactstrap"
import { Link } from "gatsby"

import Header from "./header"
import Banner from "../components/banner"

const Layout = ({ children }) => {
  
  return (
    <>
      <Header />
      <Container className="body-area">
        <main role="main" className="p-2">
          <Banner />
          {children}
        </main>
      </Container>
      <footer className="footer text-muted text-center pt-1">
        <Container>
        © {new Date().getFullYear()} - jacobashcraft.com - <Link to="/Privacy">Privacy</Link>
        </Container>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

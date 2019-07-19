import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Header from './Header'
import Footer from './Footer'
import 'prismjs/themes/prism-tomorrow.css'
import { withPrefix } from 'gatsby'
import { GlobalStyle } from './Commons'
import { media } from '../tokens'

const SiteContent = styled.div`
  margin: 73px 0;
  //margin: 0 0;

  @media ${media.tabletn767} {
    margin: 60px 0;
  }
`

class Template extends React.Component {
  render() {
    const { children } = this.props

    return (
      <>
        <Helmet>
          <link
            href="https://fonts.googleapis.com/css?family=Lato:400,700&display=swap"
            rel="stylesheet"
          />
          {/* <script src="plyr.js" type="text/javascript" />
          <script src="plyr.init.js" type="text/javascript" /> */}
        </Helmet>
        <GlobalStyle />
        <Header />
        <SiteContent>{children}</SiteContent>
        <Footer />
      </>
    )
  }
}

export default Template

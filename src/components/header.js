import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import useSiteMetadata from '../hooks/use-site-config'
import { colors, media } from '../tokens'
import useSiteImages from '../hooks/use-site-images'

const HeaderWrapper = styled.header`
  top: 0;
  left: 0;
  margin: 0 auto;
  display: block;
  width: 100%;
  z-index: 1000;
  background-color: ${colors.primaryAlpha};
  font-weight: 700;
  position: fixed;
  // @media ${media.medium} {
  //   position: fixed;
  // }
`

const HeaderNav = styled.nav`
  font-weight: 700;
  margin-left: auto;
  margin-right: auto;
  height: 60px;
  display: flex;
  flex-direction: row;
  max-width: 1140px;
  z-index: 1000;
  justify-content: space-between;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  @media only screen and ${media.tabletx767} {
    flex-direction: column;
    height: auto;
  }
`

const HeaderLinksContainer = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  @media only screen and ${media.tabletx767} {
    display: none;
    flex-direction: column;
    align-items: flex-start;
  }
`
const IconContainer = styled.div`
  display: none;
  -webkit-box-align: center;
  align-items: center;
  @media only screen and ${media.tabletx767} {
    display: flex;
  }
`

const HeaderLink = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
  color: ${colors.themeBrown100};
  border: 0;
  margin: 0;
  padding: 8px 10px;

  min-width: 42px;
  z-index: 10;
  &:hover {
    color: ${colors.themeBrown400};
  }
  @media only screen and ${media.tabletn767} {
    & + & {
      margin-left: 0.5rem;
    }
  }
`

const HeaderLinkTitle = styled(HeaderLink)`
  padding-left: 0;
`

const HeaderLinkTitleContent = styled.span`
  display: block;
  // @media ${media.medium} {
  //   display: block;
  // }
  padding-left: 0;
`
const HeaderImage = styled.img`
  padding: 4px;
  height: 57px;
`

const Header = () => {
  const {
    headerLinks,
    siteTitle,
    headerTitle,
    headerLinksIcon,
  } = useSiteMetadata()
  const iconSrc = headerLinksIcon
    ? useSiteImages(headerLinksIcon).fluid.src
    : null

  return (
    <HeaderWrapper>
      <HeaderNav id="myTopnav" className="topnav">
        <HeaderLinkTitle to={`/`} aria-label={`View home page`}>
          {iconSrc && <HeaderImage src={iconSrc} alt={siteTitle} />}
          <HeaderLinkTitleContent>{headerTitle}</HeaderLinkTitleContent>
        </HeaderLinkTitle>
        <HeaderLinksContainer id="nav-container">
          {headerLinks.map((headerLink, i) => (
            <HeaderLink
              activeClassName="active"
              to={headerLink.url}
              key={`header-link-${i}`}
              aria-label={`View ${headerLink.label} page`}
            >
              {headerLink.label}
            </HeaderLink>
          ))}
        </HeaderLinksContainer>
        <IconContainer>
        <a href="#" onClick={
          function(e){
            e.preventDefault();
            var nav = document.getElementById("nav-container");
            if(nav.classList.contains("d-flex"))
              nav.classList.remove("d-flex");
            else
              nav.classList.add("d-flex");
          }
        } className="navbar-toggle" id="js-navbar-toggle">
            <i className="fas fa-bars"></i>
        </a>
        </IconContainer>
      </HeaderNav>
    </HeaderWrapper>
  )
}

export default Header

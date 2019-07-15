import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import { Link } from 'gatsby'
import { colors, media } from '../tokens'

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Lato", sans-serif;
  color: ${colors.text};
  background-color: ${colors.background};
  //background-image: radial-gradient(${colors.themeBlue500}, ${colors.background}, ${colors.themeBrown500});
  background-image: linear-gradient(${colors.themeBlue500}, ${colors.themeBrown300});
}

.h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {
  margin-bottom: .5rem;
  font-family: inherit;
  font-weight: 500;
  line-height: 1.2;
  color: inherit;
}

img {
  max-width: 100%;
  height: auto;
  vertical-align: middle;
  border: 0;
}

a {
  text-decoration: none;
  color: ${colors.primary};
}

ul,
ol {
  padding-left: 2em;
  margin: 1em 0 0 0;
}
.active {
  color: ${colors.themeBrown400};
}
.icon {
  font-size: 32px;
}
.d-flex {
  display: flex!important;
}
.navbar-toggle {
  font-size: 32px;
  padding: 15px;
  display: none;
  align-items: center;
  margin-right: 10px;
  z-index:20;
  @media only screen and ${media.tabletx767} {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    color: ${colors.themeBrown100}
    &:hover {
      color: ${colors.themeBrown400};
    }
  }
}

@media only screen and ${media.tabletn767} {
  .head {
    font-size: 5em;
  }
  .subhead {
    font-size: 1.4em;
  }
}
`
export const StyledLink = styled(Link)`
  border-bottom: 1px dotted ${colors.primary};

  &:hover {
    border-bottom-style: solid;
  }
`

export const Text = styled.p`
  line-height: 1.6;
  margin: 1em 0 0 0;
`

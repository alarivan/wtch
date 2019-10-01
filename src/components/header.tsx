import React from "react"
import styled from "styled-components"
import Container from "./styled/container"
import { Link, animateScroll as scroll } from "react-scroll"

type Props = {
  siteTitle: string
}

const StyledHeader = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  background: white;
  box-shadow: 0 4px 2px -2px whitesmoke;
`

const HeaderInner = styled(Container)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`

const Logo = styled.h1`
  font-size: 2rem;
`

const Nav = styled.ul`
  justify-self: flex-end;
  display: flex;
  align-items: center;
  justify-content: center;
`
const NavItem = styled.li`
  &:not(:last-child) {
    margin-right: 1rem;
  }

  a {
    cursor: pointer;

    &:hover {
      color: #555;
    }

    &.active {
      position: relative;

      &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -11px;
        height: 4px;
        width: 100%;
        background: lightgray;
      }
    }
  }
`

const Header: React.FC<Props> = ({ siteTitle }) => (
  <StyledHeader>
    <HeaderInner>
      <Logo>{siteTitle}</Logo>
      <Nav>
        <NavItem>
          <Link to="home" spy={true} smooth={true} offset={-42} duration={500}>
            Home
          </Link>
        </NavItem>
        <NavItem>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            duration={500}
          >
            About
          </Link>
        </NavItem>
        <NavItem>
          <Link
            activeClass="active"
            to="gallery"
            spy={true}
            smooth={true}
            duration={500}
          >
            Gallery
          </Link>
        </NavItem>
      </Nav>
    </HeaderInner>
  </StyledHeader>
)

export default Header

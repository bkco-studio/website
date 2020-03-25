import React, { Component } from "react"
import { Link } from "gatsby"
import logo from "../../../images/BKCO.svg"
import logoDark from "../../../images/BKCOdark.svg"
import { MdMenu, MdClose } from "react-icons/md"
import styled from "styled-components"

export default class NavbarHeader extends Component {
  render() {
    const { handleNavbar, toggleColor, isHamburger, isLogoBlack } = this.props
    console.log("ISLOGOBLACK", isLogoBlack)
    return (
      <HeaderWrapper>
        <Link to="/">
          {isHamburger && !isLogoBlack ? (
            <img src={logo} className="logo" />
          ) : (
            <img src={logoDark} />
          )}
        </Link>
        <div
          onClick={() => {
            handleNavbar()
          }}
          style={{ color: toggleColor }}
        >
          {isHamburger ? (
            <MdMenu className="toggle-icon"></MdMenu>
          ) : (
            <MdClose className="toggle-icon"></MdClose>
          )}
        </div>
      </HeaderWrapper>
    )
  }
}

const HeaderWrapper = styled.div`
  padding: 1em 1.5em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .logo {
    opacity: 0.8;
  }
  .toggle-icon {
    font-size: 1.75rem;
    cursor: pointer;
    opacity: 0.8;
  }
`

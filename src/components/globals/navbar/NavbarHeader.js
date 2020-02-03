import React, { Component } from "react"
import { Link } from "gatsby"
import logo from "../../../images/BKCO.svg"
import { MdMenu } from "react-icons/md"
import styled from "styled-components"
import { styles } from "../../../utils"

export default class NavbarHeader extends Component {
  render() {
    const { handleNavbar } = this.props
    return (
      <HeaderWrapper>
        <Link to="/">
          <img src={logo} alt="company name" className="logo" />
        </Link>
        <MdMenu
          className="toggle-icon"
          onClick={() => {
            handleNavbar()
          }}
        ></MdMenu>
      </HeaderWrapper>
    )
  }
}

const HeaderWrapper = styled.div`
  .logo {
    opacity: 0.8;
  }
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .toggle-icon {
    font-size: 1.75rem;
    cursor: pointer;
    color: ${styles.colors.mainWhite};
    opacity: 0.8;
  }
`

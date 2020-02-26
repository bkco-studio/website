import React, { Component } from "react"

import styled from "styled-components"
import NavbarHeader from "./NavbarHeader"
import NavbarLinks from "./NavbarLinks"

export default class Navbar extends Component {
  state = {
    navbarOpen: false,
  }
  handleNavbar = () => {
    this.setState(() => {
      return { navbarOpen: !this.state.navbarOpen }
    })
  }
  render() {
    return (
      <NavWrapper>
        <NavbarHeader handleNavbar={this.handleNavbar} />
        <NavbarLinks navbarOpen={this.state.navbarOpen} />
      </NavWrapper>
    )
  }
}

const NavWrapper = styled.nav`
  background-color: #343731;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`

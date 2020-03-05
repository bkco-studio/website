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
    console.log("IS THIS THE HOMEPEAGE: ", this.props.homepage)
    if (this.props.homepage) {
      return (
        <NavWrapper prime>
          <NavbarHeader handleNavbar={this.handleNavbar} color="white" />
          <NavbarLinks navbarOpen={this.state.navbarOpen} color="white" />
        </NavWrapper>
      )
    } else {
      return (
        <NavWrapper>
          <NavbarHeader handleNavbar={this.handleNavbar} color="black" />
          <NavbarLinks navbarOpen={this.state.navbarOpen} color="black" />
        </NavWrapper>
      )
    }
  }
}

const NavWrapper = styled.nav`
  background-color: ${props => (props.prime ? "#343731" : "white")};
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`

import React, { Component } from "react"

import styled from "styled-components"
import NavbarHeader from "./NavbarHeader"
import NavbarLinks from "./NavbarLinks"

export default class Navbar extends Component {
  state = {
    navbarOpen: false,
    isHamburger: true,
    navbarColor: false,
    logoColor: false,
  }
  handleNavbar = () => {
    this.setState(() => {
      return {
        navbarOpen: !this.state.navbarOpen,
        isHamburger: !this.state.isHamburger,
        navbarColor: !this.state.navbarColor,
      }
    })
  }
  render() {
    console.log("IS THIS THE HOMEPEAGE: ", this.props.homepage)
    if (this.props.homepage) {
      return (
        <NavWrapper
          homePage={this.props.homepage}
          navbarColor={this.state.navbarColor}
        >
          <NavbarHeader
            handleNavbar={this.handleNavbar}
            color={"white"}
            isHamburger={this.state.isHamburger}
          />
          <NavbarLinks navbarOpen={this.state.navbarOpen} color="black" />
        </NavWrapper>
      )
    } else {
      return (
        <NavWrapper>
          <NavbarHeader
            handleNavbar={this.handleNavbar}
            color="black"
            isHamburger={this.state.isHamburger}
          />
          <NavbarLinks navbarOpen={this.state.navbarOpen} color="black" />
        </NavWrapper>
      )
    }
  }
}

const NavWrapper = styled.nav`
  background-color: ${props => (props.homePage ? "#343731" : "white")};
  background-color: ${props => (props.navbarColor ? "white" : "#343731")};

  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`

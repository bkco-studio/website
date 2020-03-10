import React, { Component } from "react"
import styled from "styled-components"
import { styles } from "../../../utils"

export default class NavbarLinks extends Component {
  state = {
    links: [
      {
        id: 0,
        path: "#",
        name: "What we do",
      },
      {
        id: 1,
        path: "#",
        name: "who we are",
      },
      {
        id: 2,
        path: "#",
        name: "case studies",
      },
      {
        id: 3,
        path: "#",
        name: "testimonies",
      },
      {
        id: 4,
        path: "#",
        name: "let's chat",
      },
    ],
  }
  render() {
    return (
      <LinkWrapper open={this.props.navbarOpen}>
        {this.state.links.map(link => {
          return (
            <li key={link.id}>
              <a
                href={link.path}
                className="nav-link"
                style={{ color: this.props.color }}
              >
                {link.name}
              </a>
            </li>
          )
        })}
      </LinkWrapper>
    )
  }
}

const LinkWrapper = styled.ul`
  /* position: relative; */
  li {
    list-style-type: none;
    margin-left: 0.5rem;
  }
  .nav-link {
    font-size: 48px;
    display: block;
    text-decoration: none;
    padding: 0.5rem 1rem;
    font-weight: 700;
    text-transform: uppercase;
    cursor: pointer;
    /* color: ${styles.colors.mainWhite}; */
    /* display: flex; */
    /* height: auto; */
    /* margin: 0 auto; */
    ${styles.transitionDefault};
    :hover {
      padding: 0.5rem 1.5rem;
    }
  }
  /* height: ${props => (props.open ? `152px` : 0)}; */
  height: ${props => (props.open ? `100vh` : 0)};
  /* position: absolute; */
  top: 0;
  padding-top: ${props => (props.open ? `9%` : 0)};
  /* padding-top: 0; */

  padding-left: 37%;
  width: 100%;
  background-color: white;
  overflow: hidden;
  /* ${styles.transitionDefault}; */
`

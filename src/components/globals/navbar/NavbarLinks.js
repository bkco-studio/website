import React, { Component } from "react"
import styled from "styled-components"
import { styles } from "../../../utils"

export default class NavbarLinks extends Component {
  state = {
    links: [
      {
        id: 0,
        path: "#",
        name: "link1",
      },
      {
        id: 1,
        path: "#",
        name: "link2",
      },
      {
        id: 2,
        path: "#",
        name: "link3",
      },
      {
        id: 3,
        path: "#",
        name: "link4",
      },
    ],
  }
  render() {
    return (
      <LinkWrapper open={this.props.navbarOpen}>
        {this.state.links.map(link => {
          return (
            <li key={link.id}>
              <a href={link.path} className="nav-link">
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
  li {
    list-style-type: none;
    margin-left: 0.5rem;
  }
  .nav-link {
    display: block;
    text-decoration: none;
    padding: 0.5rem 1rem;
    font-weight: 700;
    text-transform: capitalize;
    cursor: pointer;
    color: ${styles.colors.mainWhite};
    display: flex;
    height: auto;
    margin: 0 auto;
    ${styles.transitionDefault};
    :hover {
      padding: 0.5rem 1.5rem;
    }
  }
  height: ${props => (props.open ? `152px` : 0)};
  overflow: hidden;
  ${styles.transitionDefault};
`

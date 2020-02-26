import React from "react"
import styled from "styled-components"
import { styles } from "../utils"

export default function HomeHeader() {
  return (
    <IndexHeader>
      <h2>
        Accelerating brand growth through simple and delightful user
        experiences.
      </h2>
    </IndexHeader>
  )
}

const IndexHeader = styled.header`
  min-height: 621px;
  background-color: ${styles.colors.mainGrey};
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;

  h2 {
    color: ${styles.colors.mainWhite};
    font-size: 36px;
    padding: 1rem;
    line-height: 1.33;
    max-width: 750px;

    padding-left: 31px;
    font-family: "Noto Serif SC", serif;
  }
  @media (min-width: 768px) {
    h2 {
      border-left-style: solid;
      border-left-width: 2px;
    }
  }
`

export { HomeHeader }

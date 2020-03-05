import React from "react"
import styled from "styled-components"
import { styles } from "../utils"

export function Heading({ heading }) {
  return (
    <HeadingWrapper>
      <h2 className="heading">{heading}</h2>
    </HeadingWrapper>
  )
}

const HeadingWrapper = styled.div`
  color: ${styles.colors.mainGrey};
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 1.5rem;
  font-family: "Roboto", sans-serif;
  @media (max-width: 768px) {
    max-width: 700px;
    h2 {
      font-size: 22px;
    }
  }
`

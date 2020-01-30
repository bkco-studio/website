import React from "react"
import styled from "styled-components"
import { styles } from "../utils"

export function Text({ text }) {
  return (
    <TextWrapper>
      <p className="text">{text}</p>
    </TextWrapper>
  )
}

const TextWrapper = styled.div`
  color: ${styles.colors.mainGrey};
  font-size: 18px;
  line-height: 1.67;
`
import React from "react"
import styled from "styled-components"
import { styles, Section, Heading, Text } from "../../utils"

export default function WhatWeDo() {
  return (
    <Section>
      <Heading heading="Case studies"></Heading>
      <CaseWrapper>
        <div class="case-study">content</div>
        <div class="case-study">content</div>
        <div class="case-study">content</div>
        <div class="case-study">content</div>
      </CaseWrapper>
      <Text
        className="text-content"
        text="Ready to chat abou tyour next project?"
      ></Text>
    </Section>
  )
}

const CaseWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  margin-bottom: 3rem;
  justify-content: center;
  .case-study {
    height: 460px;
    width: 460px;
    background-color: ${styles.colors.mainGrey};
    border-radius: 5px;
  }
  .text-content {
    text-align: center;
  }
`

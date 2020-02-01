import React from "react"
import styled from "styled-components"
import { styles, Section, Heading, Text, Button } from "../../utils"

export default function WhatWeDo() {
  return (
    <Section>
      <Heading heading="Case studies"></Heading>
      <CaseImageWrapper>
        <div class="case-study">content</div>
        <div class="case-study">content</div>
        <div class="case-study">content</div>
        <div class="case-study">content</div>
      </CaseImageWrapper>
      <CallToActionWrapper>
        <Text
          className="text-content"
          text="Ready to chat about your next project?"
        ></Text>
        <p className="text-content">Ready to chat about your next project?</p>
        <Button className="what-we-do-button">Get in touch</Button>
      </CallToActionWrapper>
    </Section>
  )
}

const CaseImageWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  margin-bottom: 3rem;
  justify-content: center;
  text-align: center;
  .case-study {
    width: 100%;
    height: 460px;
    width: 460px;
    background-color: ${styles.colors.mainGrey};
    border-radius: 5px;
  }
`

const CallToActionWrapper = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
  .text-content {
    padding: 2rem 0;
  }
  .what-we-do-button {
    margin: 0 auto;
  }
`

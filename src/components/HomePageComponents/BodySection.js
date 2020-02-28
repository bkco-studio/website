import React from "react"
import { Section, Heading, Text } from "../../utils"
import styled from "styled-components"

export default function WhatWeDo({ heading, text, color }) {
  console.log(color)
  return (
    <Section>
      <BodySectionWrapper>
        <Heading heading={heading}></Heading>
        <Text text={text}></Text>
      </BodySectionWrapper>
    </Section>
  )
}

const BodySectionWrapper = styled.div`
  width: 700px;
`

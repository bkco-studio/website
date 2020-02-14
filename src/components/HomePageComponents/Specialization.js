import React from "react"
import { Section, Heading } from "../../utils"
import styled from "styled-components"

export default function Specialization() {
  return (
    <Section>
      <SpecializationWrapper>
        <Heading heading="We specialize in" />
        <ul>
          <li>UX + UI Design</li>
          <li>Web Development</li>
          <li>Branding</li>
          <li>Video + Motion</li>
          <li>Illustration</li>
          <li>Design systems</li>
          <li>Product strategy</li>
          <li>Conceptualizing + Prototyping</li>
          <li>Team training</li>
        </ul>
      </SpecializationWrapper>
    </Section>
  )
}

const SpecializationWrapper = styled.div`
  text-transform: uppercase;
  ul {
    text-transform: uppercase;
    overflow: hidden;
  }
  ul li {
    display: inline-block;
    white-space: nowrap;
    padding-right: 25px;
  }
  ul li:after {
    padding-left: 25px;
    content: "•";
  }
`

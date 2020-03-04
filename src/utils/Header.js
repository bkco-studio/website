import React from "react"
import styled from "styled-components"

export default function HomeHeader() {
  return (
    <IndexHeader>
      <h2>We design & build software experiences with conviction.</h2>
    </IndexHeader>
  )
}

const IndexHeader = styled.header`
  height: calc(100vh - 92px);
  background-color: #343731;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;

  h2 {
    color: #fff;
    font-size: 36px;
    padding: 1rem;
    line-height: 1.33;
    max-width: 750px;

    padding-left: 31px;
    font-family: "Noto Serif SC", serif;
    border-left-style: solid;
    border-left-width: 2px;
  }
  h2 {
  }
  @media (max-width: 768px) {
    max-height: 100vh;
    h2 {
      font-size: 27px;
      margin-left: 25px;
      padding-left: 20px;
    }
  }
`

export { HomeHeader }

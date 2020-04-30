import React from "react"
import styled from "styled-components"
import scrollTo from "gatsby-plugin-smoothscroll"

export default function HomeHeader() {
  return (
    <IndexHeader>
      <div className="header-container">
        <h2 className="header__heading">
          We design & build software experiences with conviction.
        </h2>
      </div>
      <section>
        <a onClick={() => scrollTo("#imageGallery")}>
          <span></span>
        </a>
      </section>
    </IndexHeader>
  )
}

const IndexHeader = styled.header`
  .header-container {
    padding-bottom: 46px;
  }
  height: calc(100vh - 92px);
  background-color: #343731;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;

  .header__heading {
    color: #fff;
    font-size: 36px;
    padding: 1rem;
    line-height: 1.42;
    max-width: 597px;
    font-weight: 900;
    padding-left: 31px;
    font-family: "Noto Serif SC", serif;
    border-left-style: solid;
    border-left-width: 2px;
  }

  a span {
    position: absolute;
    bottom: 50px;
    left: 50px;
    width: 24px;
    height: 24px;
    border-left: 1px solid #fff;
    border-bottom: 1px solid #fff;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    box-sizing: border-box;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    max-height: 100vh;
    .header__heading {
      font-size: 27px;
      margin-left: 25px;
      padding-left: 20px;
    }
  }
`

export { HomeHeader }

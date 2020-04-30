import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import BodySection from "../HomePageComponents/BodySection"
import Img from "gatsby-image"

const GET_IMAGES = graphql`
  {
    getImages: allFile(filter: { relativeDirectory: { eq: "teamGallery" } }) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 140, maxHeight: 140) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default function ImageGallery() {
  return (
    <StaticQuery
      query={GET_IMAGES}
      render={data => {
        const images = data.getImages.edges
        return (
          <div id="imageGallery">
            <BodySection
              heading="We aren’t your typical development shop."
              text="We focus on business outcomes rather than features to build. Come to us with a problem, and we will come back with a plan on how to solve it. Whether you are looking to grow engagement, launch a product, or aquire your first 100 customers, our team has the experience under our belts to get it done."
            />
            <GalleryWrapper>
              {images.map(({ node }, index) => {
                return (
                  <div key={index}>
                    <Img fluid={node.childImageSharp.fluid} className="item" />
                  </div>
                )
              })}
            </GalleryWrapper>
          </div>
        )
      }}
    />
  )
}

const GalleryWrapper = styled.div`
  display: grid;
  grid-template-columns: 220px 380px 220px 380px 220px 380px 220px 380px;
  grid-column-gap: 18px;
  padding-left: 12px;
  overflow-x: scroll;
  width: auto;
  .item {
    border-radius: 5px;
    height: 100%;
  }
  @media (min-width: 768px) {
    padding-left: 30px;
    grid-column-gap: 20px;
  }
`

import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import { Section } from "../../utils"
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
          <div>
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
  grid-column-gap: 20px;
  padding-left: 42px;
  overflow: hidden;
  .item {
    border-radius: 5px;
    height: 100%;
  }
`

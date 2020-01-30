import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import { Section } from "../../utils"
import Img from "gatsby-image"
import { Heading } from "../../utils"

const GET_IMAGES = graphql`
  {
    getImages: allFile(filter: { relativeDirectory: { eq: "teamGallery" } }) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 140) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default function OurTeam() {
  return (
    <StaticQuery
      query={GET_IMAGES}
      render={data => {
        const images = data.getImages.edges
        console.log(images)
        return (
          <Section>
            <Heading heading="Our team" />
            <GalleryWrapper>
              {images.map(({ node }, index) => {
                return (
                  <div key={index} className="item">
                    <Img fluid={node.childImageSharp.fluid} />
                  </div>
                )
              })}
            </GalleryWrapper>
          </Section>
        )
      }}
    />
  )
}

const GalleryWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 1rem;
  grid-column-gap: 1.5rem;
  @media (min-width: 576px) {
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 1rem;
    grid-column-gap: 1.5rem;
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    grid-row-gap: 1rem;
    grid-column-gap: 1.5rem;
  }
  @media (min-width: 1000px) {
    grid-template-columns: repeat(6, 1fr);
    grid-row-gap: 1rem;
    grid-column-gap: 1.5rem;
  }
`

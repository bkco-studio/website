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
            fluid(maxWidth: 140, maxHeight: 140) {
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
                  <div key={index}>
                    <Img fluid={node.childImageSharp.fluid} className="item" />
                  </div>
                )
              })}
            </GalleryWrapper>
            <TeamTextWraper>
              <p>
                Are you a highly skilled creative looking to join our network of
                talent?
              </p>
              <p className="email-link">Drop us a message.</p>
            </TeamTextWraper>
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
    /* grid-column-gap: 1.5rem; */
  }
  .item {
    border-radius: 5px;
    max-width: 140px;
    max-height: 140px;
  }
`

const TeamTextWraper = styled.div`
  line-height: 2rem;
  margin-top: 3.2rem;
  text-transform: uppercase;
  font-size: 18px;
  .email-link {
    text-decoration: underline;
  }
`

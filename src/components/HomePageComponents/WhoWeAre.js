import React from "react"
import { styles, Section, Heading } from "../../utils"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

const Banner_Image = graphql`
  {
    img1: file(relativePath: { eq: "who_we_are_banner.png" }) {
      childImageSharp {
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default function WhoWeAre() {
  return (
    <StaticQuery
      query={Banner_Image}
      render={data => {
        const img1 = data.img1.childImageSharp.fluid
        console.log(img1)
        return (
          <Section>
            <Heading heading="Who we are"></Heading>
            <ImageWrapper>
              <Img fluid={img1} />
            </ImageWrapper>
            <TextWrapper>
              <p>
                We are a collective of creatives that are passionate about
                building experiences that are intentional and impactful—
                experiences that actually matter.
              </p>
              <p>
                Our team is comprised of individuals that are masters in their
                craft. We don’t carry a full-time staff or have an expensive
                monthly overhead. Instead, we hand-tailor the perfect team for
                each project we take on.
              </p>
            </TextWrapper>
          </Section>
        )
      }}
    />
  )
}

const ImageWrapper = styled.div`
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  img {
    border-radius: 5px;
  }
`

const TextWrapper = styled.div`
  p {
    width: 620px;
    line-height: 1.67;
    margin-top: 1.5rem;
    color: ${styles.colors.mainGrey};
  }
`

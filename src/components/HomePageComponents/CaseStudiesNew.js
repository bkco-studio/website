// import React from "react"

// export default function CaseStudiesNew({ data }) {
//   console.log(data)
//   return <div>Hello from CaseStudiesNew</div>
// }

import React from "react"
// import styled from "styled-components"
import { Link, StaticQuery, graphql } from "gatsby"
import { Section } from "../../utils"
import Img from "gatsby-image"
import { Heading } from "../../utils"
import styled from "styled-components"

const GET_CASE_STUDIES = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`

export default function CaseStudiesNew() {
  return (
    <StaticQuery
      query={GET_CASE_STUDIES}
      render={data => {
        //   const images = data.getImages.edges
        console.log(data)
        return (
          <Section>
            <CaseStudiesWrapper>
              <Heading heading="Case Studies" />
              {data.allMarkdownRemark.edges.map(({ node }) => (
                <div className="case-study-container" key={node.id}>
                  <Link to={node.fields.slug}>
                    <Img
                      fluid={
                        node.frontmatter.featuredImage.childImageSharp.fluid
                      }
                    />
                    <h3>
                      {node.frontmatter.title}{" "}
                      <span>— {node.frontmatter.date}</span>
                    </h3>
                    <p>{node.excerpt}</p>
                  </Link>
                </div>
              ))}
            </CaseStudiesWrapper>
          </Section>
        )
      }}
    />
  )
}

const CaseStudiesWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1em;
  grid-template-areas: "
    caseStudy caseStudy
    caseStudy
  ";
  .case-study-container {
    grid-name: "caseStudy";
  }
`

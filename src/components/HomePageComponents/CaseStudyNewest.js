import React, { Component } from "react"

import { StaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import { Section } from "../../utils"
// import CaseStudies from "../../pages/casestudies"

export default () => (
  <StaticQuery
    query={graphql`
      query CaseStudyQueryComponent {
        allContentfulCaseStudy(limit: 1000) {
          edges {
            node {
              id
              title
              slug
              body {
                body
              }
              image {
                file {
                  url
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      console.log("PLEEEEESE: ", data)
      const caseStudies = data.allContentfulCaseStudy.edges
      return (
        <Section>
          <CaseStudiesWrapper>
            <div className="blogposts">
              {caseStudies.map(({ node }) => (
                <div key={node.id}>
                  <Link to={`/casestudy/${node.slug}`}>{node.title}</Link>
                  <img src={node.image.file.url} alt="case study image" />
                  <div>{node.body.body}</div>
                </div>
              ))}
              <span className="mgBtm__24" />
            </div>
          </CaseStudiesWrapper>
        </Section>
      )
    }}
  />
)

const CaseStudiesWrapper = styled.div``

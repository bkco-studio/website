import React from "react"

import { StaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import { Section, styles } from "../../utils"
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
      const caseStudies = data.allContentfulCaseStudy.edges
      return (
        <Section>
          <CaseStudiesWrapper>
            <div className="grid">
              {caseStudies.map(({ node }) => (
                <span className="case-study" key={node.id}>
                  <img src={node.image.file.url} alt="" />
                  <Link
                    className="project-title"
                    to={`/casestudy/${node.slug}`}
                  >
                    {node.title}
                  </Link>
                  <div className="project-description">{node.body.body}</div>
                </span>
              ))}
            </div>
          </CaseStudiesWrapper>
        </Section>
      )
    }}
  />
)

const CaseStudiesWrapper = styled.div`
  .grid {
    display: grid;
    grid-gap: 1em;
    color: ${styles.colors.mainGrey};
    grid-template-columns: 1fr 1fr;
    .project-title {
      color: inherit;
      font-size: 1.5rem;
      padding-bottom: 7px;
      text-decoration: none;
      cursor: pointer;
    }

    .project-description {
      font-size: 1.12rem;
      margin-bottom: 56px;
    }

    .case-study {
      display: inline;
      /* width: 48%; */
      img {
        max-width: 100%;
      }
    }
    .case-study:first-of-type {
      /* display: block; */
      /* background-color: red; */
      grid-column: 1 / 3;
      /* width: 900px; */
      img {
        max-width: 100%;
      }
    }
  }
`

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
        <CaseStudiesWrapper>
          <div className="grid">
            {caseStudies.map(({ node }) => (
              <div className="case-study" key={node.id}>
                <div>
                  <img
                    className="work-image"
                    src={node.image.file.url}
                    alt=""
                  />
                </div>
                {/* <Section> */}
                <Link className="project-title" to={`/casestudy/${node.slug}`}>
                  {node.title}
                </Link>
                <div className="project-description">{node.body.body}</div>
                {/* </Section> */}
              </div>
            ))}
          </div>
        </CaseStudiesWrapper>
      )
    }}
  />
)

const CaseStudiesWrapper = styled.div`
  margin-top: 50px;
  .grid {
    display: grid;
    grid-gap: 1em;
    color: ${styles.colors.mainGrey};
    grid-template-columns: 1fr 1fr;
    .project-title {
      margin-bottom: 7px;
      margin-left: 12px;
      padding-top: 24px;
      color: inherit;
      font-size: 1.5rem;
      /* padding-bottom: 7px; */
      text-decoration: none;
      cursor: pointer;
    }

    .project-description {
      font-size: 1.12rem;
      margin-bottom: 30px;
      margin-left: 12px;
      font-family: "Noto Serif SC", serif;
      /* margin-top: 7px; */
    }
    .project-title, .project-description {
      padding-left: 24px;
    }
    .case-study {
      display: inline;
      img {
        max-width: 100%;
        padding-left: 30px;
        margin-bottom: 24px;
      }
    }

   
    .case-study:first-of-type {
      display: block;
      margin: 0 auto;
      /* background-color: red; */
      grid-column: 1 / 3;
      /* width: 900px; */
      img {
        max-width: 100%;
        padding-left: 30px;
      }
    }
  }
  @media (max-width: 768px) {
    .case-study {
      grid-column: 1 / 3;
      img {
        max-width: 100%;
      }
    }
    }
  }
`

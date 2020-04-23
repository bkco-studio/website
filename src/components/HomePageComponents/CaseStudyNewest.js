import React from "react"

import { StaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import { styles } from "../../utils"

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
              description
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
                <div className="work-image">
                  <img src={node.image.file.url} alt="" />
                </div>
                <Link className="project-title" to={`/casestudy/${node.slug}`}>
                  {node.title}
                </Link>
                <div className="project-description">{node.description}</div>
              </div>
            ))}
          </div>
        </CaseStudiesWrapper>
      )
    }}
  />
)

const CaseStudiesWrapper = styled.div`
  .grid {
    color: ${styles.colors.mainGrey};
    padding: 0 6px;
    .case-study {
      max-width: 100%;
      display: hidden;
      img {
        max-width: 100%;
        border-radius: 5px;
      }
    }
    .case-study:first-of-type {
      img {
        border-radius: 5px;
      }
    }
    .project-title {
      display: block;
      margin-bottom: 7px;
      margin-top: 24px;
      color: inherit;
      font-size: 1.5rem;
      text-decoration: none;
      cursor: pointer;
    }

    .project-description {
      font-size: 1.12rem;
      margin-bottom: 30px;
      font-family: "Noto Serif SC", serif;
    }
    .project-title, .project-description {
    }
    
  }
  @media (min-width: 768px) {
    .grid {
      display: grid;
      padding: 0 42px;
      width: 100%;
      grid-template-areas: 'area1 area1 area1'
      'area2 20px area3';
      grid-template-columns: 1fr 20px 1fr;
      .project-title, .project-description  {
        padding-left: 12px;
      }
      .case-study {
        .work-image {
          border-radius: 5px;
        }
        img {
          max-width: 100%;
      }
      }
      .case-study:first-of-type {
        width: 100%;
        grid-area: area1;
        display: grid;
        .work-image {
          display: grid;
          place-content: center;
          background-color: grey;
        }
        img {
          border-radius: 0px;
          width: 800px;
        }
      }
      .case-study:nth-of-type(2) {
        grid-area: area2;
        height: 100%;
        width: 100%;
        .work-image {
          border-radius: 5px;
        }
      }
      .case-study:nth-of-type(3) {
        grid-area: area3;
        height: 100%;
        width: 100%;
      }
    }
    }
  }
`

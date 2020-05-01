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
              <div className="work-example" key={node.id}>
                <div className="work-image">
                  <img src={node.image.file.url} alt="" />
                </div>
                <Link className="work-title" to={`/casestudy/${node.slug}`}>
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
    .work-example {
      max-width: 100%;
      display: hidden;
      img {
        max-width: 100%;
        border-radius: 5px;
        margin-bottom: 0;
      }
    }
    .work-example:first-of-type {
      img {
        border-radius: 5px;
      }
    }
    .work-title {
      display: block;
      margin-bottom: 7px;
      margin-top: 12px;
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
    .work-title, .project-description {
      padding-left: 8px;
    }
    
  }
  @media (min-width: 768px) {
    margin-top: 50px;
    margin-bottom: 70px;
    .grid {
      display: grid;
      padding: 0 42px;
      width: 100%;
      grid-template-areas: 'area1 area1 area1'
      'area2 20px area3';
      grid-template-columns: 1fr 20px 1fr;
      .work-title, .project-description  {
        padding-left: 12px;
      }
      .work-title {
        margin-top: 24px;
      }
      .work-example {
        .work-image {
          border-radius: 5px;
        }
        img {
          max-width: 100%;
      }
      }
      .work-example:first-of-type {
        width: 100%;
        grid-area: area1;
        display: grid;
        margin-bottom: 30px;
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
      .word-example:nth-of-type(2) {
        grid-area: area2;
        height: 100%;
        width: 100%;
        .work-image {
          border-radius: 5px;
        }
      }
      .work-example:nth-of-type(3) {
        grid-area: area3;
        height: 100%;
        width: 100%;
      }
    }
    }
  }
`

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
          {/* <Section> */}
          <div className="grid">
            {caseStudies.map(({ node }) => (
              <div className="case-study" key={node.id}>
                <div className="work-image">
                  <img src={node.image.file.url} alt="" />
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
          {/* </Section> */}
        </CaseStudiesWrapper>
      )
    }}
  />
)

const CaseStudiesWrapper = styled.div`
  /* margin-top: 50px; */
  padding: 2rem 2em;
  margin: 0 auto;
  /* margin-left: 60px; */
  /* background-color: ${styles.colors.mainGrey}; */
  max-width: 100%;
  display: grid;
  place-content: center;
  .grid {
    /* margin: 0 auto; */
    display: grid;
    grid-gap: 20px;
    /* margin: 0 auto; */
    color: ${styles.colors.mainGrey};
    /* grid-template-columns: 460px 460px; */

    .case-study {
      /* max-width: 100%; */
      display: inline;
      max-width: 100%;
      .work-image {
        border: 1px solid blue;
        /* width: 1200px; */
      }
      img {
        max-width: 100%;
        /* padding-left: 30px; */
        margin-bottom: 24px;
      }
    }

   
    .case-study:first-of-type {
      display: block;
      .work-image {
        background-color: orange;

         /* width: 900px; */
      img {
        max-width: 100%;
        padding: 2em;
        /* margin: 0 auto; */
      }
        }

      /* margin: 0 auto; */
      max-width: 100%;
      /* background-color: red; */
      grid-column: 1 / 3;
      
     
      
    }
    .project-title {
      margin-bottom: 7px;
      /* margin-left: 12px; */
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
      /* margin-left: 12px; */
      font-family: "Noto Serif SC", serif;
      /* margin-top: 7px; */
    }
    .project-title, .project-description {
      /* padding-left: 24px; */
    }
    
  }
  @media (max-width: 768px) {
    .grid {
      .case-study {
        grid-column: 1 / 3;
        img {
          max-width: 100%;
        }
      }
      
    }

    .grid {
      .project-title, .project-description  {
        padding-left: 12px;
        
      }
      .case-study {
        /* padding-right: 10px; */
        img {
        /* padding-left: 12px; */
        width: 100%;
      }

      }
      .case-study:first-of-type {
        /* max-width: 460px; */
        grid-column: 1 / 3;
        margin: 0 0;
        img {
        /* padding-left: 12px; */
        max-width: 100%;
      }
      }
    }
    }
  }
`

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
          {/* <Section> */}
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
          {/* </Section> */}
        </CaseStudiesWrapper>
      )
    }}
  />
)

const CaseStudiesWrapper = styled.div`
 
  display: grid;
  place-content: center;
  .grid {
    max-width: 100%;
    display: grid;
    place-items: center;
    /* grid-gap: 20px; */
    /* padding: 0 2em; */
    /* margin: 0 auto; */
    color: ${styles.colors.mainGrey};
    /* grid-template-columns: 460px 460px; */

    .case-study {
      /* max-width: 100%; */
      display: inline;
      /* max-width: 95%; */
      /* display: grid;  */
      /* place-items: center; */
      padding-left: 24px;
      .work-image {
      }
      img {
        max-width: 95%;
        /* padding-left: 30px; */
        /* padding: 0 2em; */
        /* margin-bottom: 24px; */
      }
    }

   
    .case-study:first-of-type {
      width: 100vw;
      padding: 0 2em;
      /* display: block; */
      /* display: grid;
      place-items: center; */
      .work-image {
        display: grid;
        place-items: center;
        background-color: #343731;

         /* width: 900px; */
        /* max-width: 940px; */
        /* padding: 2em; */
        /* margin: 0 auto; */
        }

      /* margin: 0 auto; */
      max-width: 100vw;
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
          max-width: 93%;
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
        max-width: 93%;
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

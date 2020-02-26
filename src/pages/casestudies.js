import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
const CaseStudies = ({ data }) => {
  console.log("pages -> casestudies.js", data)
  const caseStudies = data.allContentfulCaseStudy.edges
  return (
    <Layout>
      <SEO title="Blog posts" />
      <h1>{"Here's a list of all blogposts!"}</h1>
      <div className="blogposts">
        {caseStudies.map(({ node }) => (
          <div key={node.id}>
            <Link to={`/casestudy/${node.slug}`}>{node.title}</Link>
            <img src={node.image.file.url} alt="case study image" />
          </div>
        ))}
        <span className="mgBtm__24" />
        <Link to="/">Go back to the homepage</Link>
      </div>
    </Layout>
  )
}
export default CaseStudies
export const query = graphql`
  query CaseStudyPageQuery {
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
`

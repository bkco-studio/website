import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import { Section } from "../utils"
// import SEO from "../components/seo";
const CaseStudy = ({ data }) => {
  const { title, body, image } = data.contentfulCaseStudy
  return (
    <Layout>
      <Section>
        {/* <SEO title={title} /> */}
        <div className="blogpost">
          <h1>{title}</h1>
          <img alt={title} src={image.file.url} />

          <p className="body-text">{body.body}</p>
          <Link to="/casestudy">View more posts</Link>
          <Link to="/">Back to Home</Link>
        </div>
      </Section>
    </Layout>
  )
}
export default CaseStudy
export const pageQuery = graphql`
  query($slug: String!) {
    contentfulCaseStudy(slug: { eq: $slug }) {
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
`

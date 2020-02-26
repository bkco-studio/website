// import React from "react"
// import styled from "styled-components"
// import { styles, Section, Heading, Text, Button } from "../../utils"

// export default function WhatWeDo() {
//   return (
//     <Section>
//       <Heading heading="Case studies"></Heading>
//       <CaseImageWrapper>
//         <div className="case-study">image content</div>
//         <div className="case-study">image content</div>
//         <div className="case-study">image content</div>
//         <div className="case-study">image content</div>
//       </CaseImageWrapper>
//       <CallToActionWrapper>
//         <Text
//           className="text-content"
//           text="Ready to chat about your next project?"
//         ></Text>
//         <Button className="what-we-do-button">Get in touch</Button>
//       </CallToActionWrapper>
//     </Section>
//   )
// }

// const CaseImageWrapper = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   grid-gap: 1rem;
//   margin-bottom: 3rem;
//   justify-content: center;
//   text-align: center;
//   .case-study {
//     width: 100%;
//     height: 440px;
//     width: 440px;
//     background-color: ${styles.colors.mainGrey};
//     border-radius: 5px;
//   }
// `

// const CallToActionWrapper = styled.div`
//   display: grid;
//   justify-content: center;
//   align-items: center;
//   padding: 2rem 0;
//   .text-content {
//     padding: 2rem 0;
//   }
//   .what-we-do-button {
//     margin: 0 auto;
//   }
// `
import React from "react"
import { Link, graphql } from "gatsby"
// import Layout from "../components/layout"

export default ({ data }) => {
  console.log(data)
  return (
    // <Layout>
    <div>
      <h1>Amazing Pandas Eating Things</h1>
      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <Link to={node.fields.slug}>
            <h3>
              {node.frontmatter.title} <span>— {node.frontmatter.date}</span>
            </h3>
            <p>{node.excerpt}</p>
          </Link>
        </div>
      ))}
    </div>
    // </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
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

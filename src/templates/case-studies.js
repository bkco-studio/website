// // import React from "react"
// // import Layout from "../components/layout"

// // export default () => {
// //   return (
// //     <Layout>
// //       <div>Hello blog post</div>
// //     </Layout>
// //   )
// // }

// import React from "react"
// import { graphql } from "gatsby"
// import Layout from "../components/layout"
// import { Heading, Section } from "../utils"
// import Img from "gatsby-image"

// export default ({ data }) => {
//   const caseStudy = data.markdownRemark
//   let featuredImgFluid =
//     caseStudy.frontmatter.featuredImage.childImageSharp.fluid
//   console.log("DATA DATA: ", caseStudy)
//   return (
//     <Layout>
//       <Section>
//         <Heading heading="Case Studies" />
//         <Img fluid={featuredImgFluid} />
//         <div dangerouslySetInnerHTML={{ __html: caseStudy.html }} />
//       </Section>
//     </Layout>
//   )
// }

// export const query = graphql`
//   query($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       html
//       frontmatter {
//         title
//         featuredImage {
//           childImageSharp {
//             fluid(maxWidth: 800) {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//       }
//     }
//   }
// `

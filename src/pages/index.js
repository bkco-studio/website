import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HomeHeader from "../utils/Header"
import OurTeam from "../components/HomePageComponents/OurTeam"
import WhatWeDo from "../components/HomePageComponents/WhatWeDo"
import WhoWeAre from "../components/HomePageComponents/WhoWeAre"
import ContactUs from "../components/HomePageComponents/ContactUs"
import Testimonials from "../components/HomePageComponents/Testimonials"
import Specialization from "../components/HomePageComponents/Specialization"
import CaseStudyNewest from "../components/HomePageComponents/CaseStudyNewest"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <HomeHeader />
      <WhatWeDo />
      <Specialization />
      <WhoWeAre />
      <OurTeam />
      <CaseStudyNewest />
      <Testimonials />
      <ContactUs />
    </Layout>
  )
}

export default IndexPage
export const query = graphql`
  query CaseStudyQuery {
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

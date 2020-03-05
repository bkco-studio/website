import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HomeHeader from "../utils/Header"
import ContactUs from "../components/HomePageComponents/ContactUs"
import Testimonials from "../components/HomePageComponents/Testimonials"
import CaseStudyNewest from "../components/HomePageComponents/CaseStudyNewest"
import BodySection from "../components/HomePageComponents/BodySection"
import ImageGallery from "../components/HomePageComponents/ImageGallery"

const IndexPage = ({ data }) => {
  return (
    <Layout homepage={true}>
      <SEO title="Home" />
      <HomeHeader />

      <ImageGallery />
      <BodySection
        heading="We build unforgetable user experiences."
        text="We don't take shortcuts. This isn't just our job— this is our vocation. We take pride in the work we do and believe that things are only worth doing if they are done right."
      />
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

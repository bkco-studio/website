import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HomeHeader from "../utils/Header"
import OurTeam from "../components/HomePageComponents/OurTeam"
import WhatWeDo from "../components/HomePageComponents/WhatWeDo"
import WhoWeAre from "../components/HomePageComponents/WhoWeAre"
// import CaseStudies from "../components/HomePageComponents/CaseStudies"
import CaseStudiesNew from "../components/HomePageComponents/CaseStudiesNew"
import ContactUs from "../components/HomePageComponents/ContactUs"
import Testimonials from "../components/HomePageComponents/Testimonials"
import Specialization from "../components/HomePageComponents/Specialization"
import { Heading, Section } from "../utils"
import Img from "gatsby-image"

const IndexPage = ({ data }) => {
  console.warn("DDDAAAATAAA", data)
  return (
    <Layout>
      <SEO title="Home" />
      <HomeHeader />
      <WhatWeDo />
      <Specialization />
      <WhoWeAre />
      <OurTeam />
      {/* <CaseStudies /> */}
      <CaseStudiesNew />

      <Testimonials />
      <ContactUs />
    </Layout>
  )
}

export default IndexPage

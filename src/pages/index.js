import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HomeHeader from "../utils/Header"
import OurTeam from "../components/HomePageComponents/OurTeam"
import WhatWeDo from "../components/HomePageComponents/WhatWeDo"
import WhoWeAre from "../components/HomePageComponents/WhoWeAre"
import CaseStudies from "../components/HomePageComponents/CaseStudies"
import ContactUs from "../components/HomePageComponents/ContactUs"
import Testimonials from "../components/HomePageComponents/Testimonials"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomeHeader />
    <WhatWeDo />
    <WhoWeAre />
    <OurTeam />
    <CaseStudies />
    <Testimonials />
    <ContactUs />
  </Layout>
)

export default IndexPage

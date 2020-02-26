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
import { Link } from "gatsby"

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
      <Link to="/casestudies">View All Case Studies</Link>
      <Testimonials />
      <ContactUs />
    </Layout>
  )
}

export default IndexPage

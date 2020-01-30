import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HomeHeader from "../utils/Header"
import OurTeam from "../components/HomePageComponents/OurTeam"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomeHeader />
    <OurTeam />
  </Layout>
)

export default IndexPage

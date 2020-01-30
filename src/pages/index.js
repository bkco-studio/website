import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HomeHeader from "../utils/Header"
import OurTeam from "../components/HomePageComponents/OurTeam"
import WhatWeDo from "../components/HomePageComponents/WhatWeDo"
import WhoWeAre from "../components/HomePageComponents/WhoWeAre"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomeHeader />
    <WhatWeDo />
    <WhoWeAre />
    <OurTeam />
  </Layout>
)

export default IndexPage

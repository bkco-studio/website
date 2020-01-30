import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HomeHeader from "../utils/Header"
import OurTeam from "../components/HomePageComponents/OurTeam"
import WhatWeDo from "../components/HomePageComponents/WhatWeDo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomeHeader />
    <WhatWeDo />
    <OurTeam />
  </Layout>
)

export default IndexPage

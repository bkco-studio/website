import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HomeHeader from "../utils/Header"
import { Section, Heading } from "../utils"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomeHeader />
  </Layout>
)

export default IndexPage

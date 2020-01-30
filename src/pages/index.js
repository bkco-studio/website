import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HomeHeader from "../utils/Header"
import { Section } from "../utils"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomeHeader />
    <Section>
      <h1>Here is some text</h1>
    </Section>
  </Layout>
)

export default IndexPage

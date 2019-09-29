import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Showcase from "../components/sections/Showcase"
import Banner from "../components/sections/Banner"
import Gallery from "../components/sections/Gallery"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Showcase />
    <Banner />
    <Gallery />
  </Layout>
)

export default IndexPage

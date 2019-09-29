import React, { ReactNode } from "react"
import { ThemeProvider } from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import GlobalStyles from "./styled/global"
import theme from "./styled/theme"
import Header from "./header"
import Footer from "./footer"

type Props = {
  children: ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
        <Footer />
      </>
    </ThemeProvider>
  )
}

export default Layout

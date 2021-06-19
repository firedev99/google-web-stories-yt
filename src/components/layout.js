import * as React from "react"
import PropTypes from "prop-types"
// global styles
import { GlobalStyles, Wrapper } from "./global-styles";
import { useEffect } from "react";

// import Header from "./header"

const Layout = ({ children }) => {

  useEffect(() => {
    document.body.className = "intro_wrapper";

    return () => document.body.removeAttribute("intro_wrapper")
  }, [])

  return (
    <>
      <GlobalStyles />
      {/* <Header siteTitle={data.site.siteMetadata?.title || `Title`} /> */}
      <Wrapper>
        <main>{children}</main>
        <footer
          style={{
            margin: `0 auto`,
          }}
        >
          © {new Date().getFullYear()}, Built by
          {` `}
          <a href="https://www.gatsbyjs.com">firedev99</a>
        </footer>
      </Wrapper>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

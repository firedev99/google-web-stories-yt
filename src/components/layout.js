import React, { useEffect } from "react"
import PropTypes from "prop-types"
// styled-components
import { GlobalStyles, Wrapper } from "./global-styles";

export default function Layout({ children }) {

  useEffect(() => {
    document.body.className = "intro_wrapper";
    return () => document.body.removeAttribute("intro_wrapper");
  }, [])

  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <main>{children}</main>
        <footer
          style={{
            margin: `1rem 0`,
          }}
        >
          © {new Date().getFullYear()}, Built by
          {` `}
          <a aria-hidden="false" target="_blank" rel="noreferrer" href="https://twitter.com/thedevguy99">firedev99</a>
        </footer>
      </Wrapper>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}


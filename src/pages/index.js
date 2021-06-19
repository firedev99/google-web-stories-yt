import React, { useState, useEffect } from "react"
// hooks
import useWindowSize from "../hooks/useWindowSize";
// components
import Layout from "../components/layout"
import Intro from "../components/intro";
import Slider from "../components/slider";
import StoriesMesh from "../components/stories";
import Requirement from "../components/requirements";

const IndexPage = () => {
  const [loading, setLoading] = useState(true);

  const size = useWindowSize();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000)
  }, [])

  return loading ? <div /> : (
    size.width >= 1366 ? (
      <Layout>
        <Intro />
        <Slider />
        <StoriesMesh />
      </Layout>
    ) : (
      <Layout>
        <Requirement />
      </Layout>
    )
  )
}

export default IndexPage

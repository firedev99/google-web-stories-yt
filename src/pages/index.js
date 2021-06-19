import React, { useState, useEffect } from "react"
// hooks
import useWindowSize from "../hooks/useWindowSize";
// components
import Layout from "../components/layout"
import Intro from "../components/intro";
import Slider from "../components/slider";
import StoriesMesh from "../components/stories";

const IndexPage = () => {
  const [loading, setLoading] = useState(false);

  const size = useWindowSize();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000)
  }, [])

  return loading ? <div /> : (
    size.width >= 1366 ? (
      <Layout>
        <Intro />
        <Slider />
        <StoriesMesh />
      </Layout>
    ) : (
      <h3>{size.width}</h3>
    )
  )
}

export default IndexPage

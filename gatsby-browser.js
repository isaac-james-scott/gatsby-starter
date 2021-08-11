import React from "react"
import Layout from './src/pages/layout'

export const wrapRootElement = ({ element }) => (
  <Layout>{element}</Layout>
)
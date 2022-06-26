import React from 'react'
import Layout from '../view/layout'

export default function Main(props) {
  return <Layout>
    <h1> NextJS + ExpressJS POC </h1>
    <div style={{marginBottom: "4vh"}}/>
    <ul >
      <li> <a href="/preload-data"> Preload Data From Server + Dynamic Data </a> </li>
      <li> <a href="/load-data-api"> Load All Data On Client Side </a> </li>
      <li> <a href="/conditional/5"> Conditional Routing </a> </li>
    </ul>
  </Layout>
}

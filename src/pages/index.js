import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'
import indexStyles from './index.module.scss'

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1 className={indexStyles.title}>Hi there.</h1>
      <h3>The name's Kelly. Shaun Kelly.</h3>
      <p>
        Need a developer?{' '}
        <Link className={indexStyles.link} to="/contact">
          Contact me.
        </Link>
      </p>
    </Layout>
  )
}

export default IndexPage

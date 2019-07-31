import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'
import errorStyles from './404.module.scss'

const NotFound = () => {
  return (
    <Layout>
      <Head title="404" />
      <h1 className={errorStyles.title}>Page not found</h1>
      <p>
        <Link to="/">Head home</Link>
      </p>
    </Layout>
  )
}

export default NotFound

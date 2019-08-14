import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'
import aboutStyles from './about.module.scss'

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <h1 className={aboutStyles.title}>About Me</h1>

      <p>
        <Link className={aboutStyles.link} to="/contact">
          Want to work with me? Reach out.
        </Link>
      </p>
    </Layout>
  )
}

export default AboutPage

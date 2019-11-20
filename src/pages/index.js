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
      <h3>I&apos;m Shaun, a web developer.</h3>
      <p>
        This site was spun up using Gatsby, a framework built upon the React library. The purpose of
        this site is to, initially, tinker around with GraphQL, a query language I used to pull data
        from Markdown files to render them as blog posts, as well as to bolster my knowledge of
        Gatsby in general.
        <br /> <br />
        After I got down the method of rendering local Markdown files as blog posts, I installed a
        Gatsby plugin to communicate with Contentful (a common CMS, or Content Management System),
        and refactored my GraphQL queries to instead interface with Contentful&apos;s GraphQL
        Content API. This allows the end user/client, in this case me, to post blog posts to this
        site via an easy-to-use UI on Contentful&apos;s website.
        <br />
        <br />
        Now that the base functionality of this site is working, it&apos;s time for more noticeable
        tweaks. Later revisions will include sprucing up the CSS of the site, some animations,
        perhaps a toggle-able drop-down menu on mobile, sticky header, a legitimate and personalized
        domain, replace some links with buttons, dark/light mode button, new color palette, etc.
      </p>
      <p>
        Need a developer?{` `}
        <Link className={indexStyles.link} to="/contact">
          Contact me.
        </Link>
      </p>
    </Layout>
  )
}

export default IndexPage

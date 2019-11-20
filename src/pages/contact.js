import React from 'react'

import Layout from '../components/layout'
import Head from '../components/head'
import contactStyles from './contact.module.scss'

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1 className={contactStyles.title}>Contact</h1>
      <p>
        The best way to reach me is via{` `}
        <a
          className={contactStyles.link}
          href="https://twitter.com/@shaun37k"
          target="_blank"
          rel="noopener noreferrer"
        >
          {` `}
          @shaun37k
        </a>
        {` `}
        on Twitter! Don`&apos`t have a Twitter? No biggie!
        <br /> Shoot me an email <a href="mailto: shaun37k@gmail.com">here</a>!
      </p>
    </Layout>
  )
}

export default ContactPage

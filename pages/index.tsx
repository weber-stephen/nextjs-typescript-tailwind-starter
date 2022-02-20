import React from 'react'
import styles from '../styles/Home.module.css'

import Meta from '../components/meta'
import Navbar from '../components/navbar'
import Banner from '../components/banner'
import Footer from '../components/footer'
import Features from '../components/features'

const HomePage: React.FC = () => {
  return (
    <>
      <Meta />
      <Navbar  />
      <main className="relative overflow-hidden">
        <Banner />
        <Features />
      </main>
      <Footer />
    </>
  )
}

export default HomePage
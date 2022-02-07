import React from 'react'
import styles from '../styles/Home.module.css'
import PageWithLayoutType from '../types/pageWithLayout'
import LandingLayout from '../layouts/landingLayout'

import Banner from '../components/banner'
import Features from '../components/features'

const HomePage: React.FC = () => {
  return (
    <>
      <main className="relative overflow-hidden">
        <Banner />
        <Features />
      </main>
    </>
  )
}

;(HomePage as PageWithLayoutType).layout = LandingLayout

export default HomePage
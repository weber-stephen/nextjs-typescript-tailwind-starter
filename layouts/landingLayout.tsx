import React from 'react'

// import Header from '../components/header'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import {Meta} from '../components/meta'

type LayoutProps = {
  children: React.ReactNode
}

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <>
      <Meta />
      <Navbar  />
      {children}
      <Footer />
    </>
  )
}

export default Layout
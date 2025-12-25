import React from 'react'
import { Outlet } from 'react-router'
import Footer from '../Footer/Footer'

function Layout() {
  return (
    <>
    <Headers />
    <Outlet/>
    <Footer />
    </>
  )
}

export default Layout
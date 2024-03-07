import Header from '../header/Header'
import Footer from '../footer/Footer'
import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

function MainLayout() {
  return (
    <>
        <Header/>
        <Suspense>
            <Outlet/>
        </Suspense>
        <Footer/>
    </>
    
  )
}

export default MainLayout
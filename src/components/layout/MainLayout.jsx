import Header from '../header/Header'
import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

function MainLayout() {
  return (
    <>
        <Header/>
        <Suspense>
            <Outlet/>
        </Suspense>
    </>
    
  )
}

export default MainLayout
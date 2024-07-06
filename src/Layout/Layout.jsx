import React from 'react'
import Sidebar from '../Components/Sidebar'
import Home from '../Components/Home'
import Footer from '../Components/Footer'

const Layout = ({ children }) => {
    return (
        <div className='flex flex-col h-screen'>
            <div className='flex'>
                <Sidebar />
                <Home />
            </div>
            <Footer />
            {children}
        </div>
    )
}

export default Layout
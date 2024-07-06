import React from 'react'
import Sidebar from '../Components/Sidebar'
import Home from '../Components/Home'
import Footer from '../Components/Footer'
import { Route, Routes } from 'react-router-dom'
import Artist from '../Components/Artist'

const Layout = ({ children, url }) => {

    return (
        <div className='flex flex-col h-screen'>
            <div className='flex'>
                <Sidebar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/artist" element={<Artist />} />
                </Routes>
            </div>
            <Footer />
            {children}
        </div>
    )
}

export default Layout
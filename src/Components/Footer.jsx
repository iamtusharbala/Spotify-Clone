import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='w-full h-[8%] bg-green-500 z-10 footer px-5 py-3 text-white flex justify-between items-center cursor-pointer'>
            <div>
                <p className='text-md'>Preview of Spotify</p>
                <p className='text-xs mt-1'>Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed.</p>
            </div>
            <Link to='/signup'><button className='rounded-full m-3 p-4 w-[120px] text-sm'>Sign up free</button></Link>
        </div>
    )
}

export default Footer
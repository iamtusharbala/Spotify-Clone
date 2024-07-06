import React from 'react'
import Avatar from './Avatar'
import Album from './Album'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='w-[80%] secondary_bg h-[92%] rounded-md'>
            <div className="top-row h-[8%] flex justify-between items-around">
                <div className="next-arrow flex p-3">
                    <FaArrowLeft className='m-3 cursor-pointer' />
                    <FaArrowRight className='m-3 cursor-pointer' />
                </div>
                <div className="login-signup">
                    <Link to='/signup'><button className='bg-transparent m-3 p-4 text-sm text-[#A7A7A7] hover:text-white'>Sign up</button></Link>
                    <Link to='/login'><button className='rounded-full m-3 p-4 w-[120px] text-sm'>Log In</button></Link>
                </div>
            </div>
            <div className="main h-[92%] gradient flex flex-col gap-1 p-8 justify-around">
                <div className="artist-row">
                    <div className="title flex justify-between">
                        <p className='text-xl font-bold hover:underline cursor-pointer text-white'>Popular artists</p>
                        <p className='text-sm font-bold hover:underline cursor-pointer'>Show all</p>
                    </div>
                    <div className="row artist-avatar pt-8 flex justify-between">
                        <Avatar />
                        <Avatar />
                        <Avatar />
                        <Avatar />
                        <Avatar />
                        <Avatar />
                    </div>
                </div>
                <div className="album-row">
                    <div className="title flex justify-between">
                        <p className='text-xl font-bold hover:underline cursor-pointer text-white'>Popular albums</p>
                        <p className='text-sm font-bold hover:underline cursor-pointer'>Show all</p>
                    </div>
                    <div className="row album-avatar pt-8 flex align-center flex-wrap gap-1">
                        <Album />
                        <Album />
                        <Album />
                        <Album />
                        <Album />
                        <Album />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Home
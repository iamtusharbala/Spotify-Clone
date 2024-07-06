import React, { useEffect } from 'react'
import Avatar from './Avatar'
import Album from './Album'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { Artists } from '../JSON/Artists'
import { Albums } from '../JSON/Albums'

const Home = () => {
    return (
        <div className='w-[80%] secondary_bg h-[92%] rounded-md'>
            <div className="top-row h-[8%] flex justify-between items-around">
                <div className="next-arrow flex p-3">
                    <FaChevronLeft className='m-3 cursor-pointer' />
                    <FaChevronRight className='m-3 cursor-pointer' />
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
                    <div className="row artist-avatar pt-8 flex justify-between over">
                        {Artists.map((artist) => <Avatar key={artist.id} image={artist.image} artistName={artist.name} />)}
                    </div>
                </div>
                <div className="album-row">
                    <div className="title flex justify-between">
                        <p className='text-xl font-bold hover:underline cursor-pointer text-white'>Popular albums</p>
                        <p className='text-sm font-bold hover:underline cursor-pointer'>Show all</p>
                    </div>
                    <div className="row album-avatar pt-8 flex align-center flex-wrap gap-1">
                        {Albums.map((album) => <Album key={album.id} image={album.image} artist={album.artist} title={album.title} />)}
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Home
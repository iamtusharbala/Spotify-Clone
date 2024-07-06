import React from 'react'
import spotifyLogo from '../assets/spotify-logo.png'
import { BiLibrary } from 'react-icons/bi';
import { FaPlus } from 'react-icons/fa';
import { TbWorld } from 'react-icons/tb';
import { GoHomeFill } from 'react-icons/go';
import { FiSearch } from 'react-icons/fi';

const Sidebar = () => {
    return (
        <div className='w-[20%] h-screen flex flex-col gap-2 p-2 font-3xl'>
            <div className="home h-[16%] secondary_bg rounded-md p-8 flex flex-col gap-4 justify-center cursor-pointer">
                <div className="spotify-logo mb-3">
                    <img src={spotifyLogo} className="w-[85px]" alt="" srcset="" />
                </div>
                <div className="flex items-center gap-2 hover:text-white">
                    <GoHomeFill className='font-bold text-xl' /><span className='ms-3'>Home</span>
                </div>
                <div className="flex items-center gap-2 hover:text-white">
                    <FiSearch className='font-bold text-xl' /><span className='ms-3' >Search</span>
                </div>
            </div>
            <div className="home h-[76%] secondary_bg rounded-md flex flex-col justify-between">
                <div className="top-layer">
                    <div className="flex items-center gap-2 px-6 py-5 mx-2 justify-between ">
                        <span className='hover:text-white cursor-pointer'><BiLibrary className='font-bold text-xl inline' />Your Library</span>
                        <span><FaPlus className='hover:text-white cursor-pointer' /></span>
                    </div>
                    <div className="sidebar-content p-3">
                        <div className="create-playlist tertiary_bg rounded-lg p-6 mt-4 flex flex-col text-white">
                            <span className='mb-2'>Create your first playlist</span>
                            <span className='text-xs font-normal'>It's easy we will help you</span>
                            <button className='button rounded-full mt-3 p-3 text-xs'>Create Playlist</button>
                        </div>
                        <div className="podcast tertiary_bg rounded-lg p-6 mt-5 flex flex-col text-white">
                            <span className='mb-2'>Let's find some podcast to follow</span>
                            <span className='text-xs font-normal'>We'll keep you updated on new episodes</span>
                            <button className='button rounded-full mt-3 p-3 text-xs'>Browse Podcasts</button>
                        </div>
                    </div>
                </div>
                <div className="bottom-layer p-8">
                    <div className="side-links">
                        <ul className='font-light text-xs flex gap-4 flex-wrap items-end'>
                            <li className='cursor-pointer'>Legal</li>
                            <li className='cursor-pointer'>Safety & Privacy Center</li>
                            <li className='cursor-pointer'>Privacy Poilcy</li>
                            <li className='cursor-pointer'>Cookies</li>
                            <li className='cursor-pointer'>About Ads</li>
                            <li className='cursor-pointer'>Accesibility</li>
                            <li className='cursor-pointer'>Cookies</li>
                        </ul>
                    </div>
                    <div className="language-button mt-5">
                        <button className='outline-btn p-2 text-sm'><TbWorld className='inline' /> English</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
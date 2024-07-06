import React from 'react'
import { FaPlay } from 'react-icons/fa'

const Avatar = ({ image, artistName }) => {
    return (
        <div className='rounded-full w-[16%] cursor-pointer avatar relative'>
            <div className="artist-details p-3">
                <img src={image} alt={artistName} className='rounded-full' />
                <h1 className='font-normal text-sm text-white'>{artistName}</h1>
                <span className='font-normal text-xs'>Artist</span>
                <div className='bg-green-500 p-3 rounded-full w-12 h-12 avatar-play absolute'>
                    <FaPlay className='text-black mt-1 ms-1' />
                </div>
            </div>
        </div>
    )
}

export default Avatar

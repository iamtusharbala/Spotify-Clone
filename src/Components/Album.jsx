import React from 'react'
import { FaPlay } from 'react-icons/fa'

const Album = ({ image, artist, title }) => {
    return (
        <div className='w-[220px] h-[220px] rounded-lg album cursor-pointer relative'>
            <div className="album-details p-3">
                <img src={image} alt={title} className='rounded-lg' />
                <div className="album-detail mt-3">
                    <h1 className='font-normal text-sm text-white'>{title}</h1>
                    <span className='font-normal text-xs'>{artist}</span>
                </div>
                <div className='bg-green-500 p-3 rounded-full w-12 h-12 album-play absolute bottom-3 end-3 flex justify-center items-center'>
                    <FaPlay className='text-black mt-1 ms-1' />
                </div>
            </div>
        </div>
    )
}

export default Album

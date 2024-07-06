import React from 'react'
import { FaPlay } from 'react-icons/fa'

const Avatar = () => {
    return (
        <div className='rounded-full w-[16%] cursor-pointer avatar text-white'>
            <div className="artist-details p-3">
                <img src="https://i.scdn.co/image/ab6761610000e5ebcb6926f44f620555ba444fca" alt="" srcset="" />
                <h1>Pritam</h1>
                <span className='font-normal text-xs'>Artist</span>
                <div className='bg-green-500 p-3 rounded-full w-10 h-10 play'>
                    <FaPlay className='text-black' />
                </div>
            </div>
        </div>
    )
}

export default Avatar
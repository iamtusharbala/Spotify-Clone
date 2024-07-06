import React from 'react'
import { FaPlay } from 'react-icons/fa'

const Album = () => {
    return (
        <div className='w-[220px] h-[220px] rounded-lg cursor-pointer text-white'>
            <div className="album-details p-3">
                <img src="https://upload.wikimedia.org/wikipedia/en/8/8b/Animal_Soundtrack_Album_Cover.jpg" alt="" srcset="" className='rounded-lg' />
                <div className="album-details mt-3">
                    <h1>Animal</h1>
                    <span className='font-normal text-xs'>Manan Bhardwaj</span>
                </div>
                {/* <div className='bg-green-500 p-3 rounded-full w-10 h-10 play'>
                    <FaPlay className='text-black' />
                </div> */}
            </div>
        </div>
    )
}

export default Album
import React from 'react'
import Container from '../Layout/Container'
import banner from '../../assets/banner.jpg'

const Banner = () => {
    return (
        <div className='max-w-containerx mx-auto'>
            <img src={banner} alt="" />
        </div>
    )
}

export default Banner
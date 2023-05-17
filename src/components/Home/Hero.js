import React from 'react'
import search from '../../assets/image/icon/search.svg'


const Hero = () => {
    return (
        <>
            <div className="hero-box d-flex flex-column text-center justify-content-center align-items-center">
                <div className="hero-box_title primary-title">
                    Make your interior more <br /> minimalistic & modern
                </div>
                <div className="hero-box_text primary-text">
                    Turn your room with panto into a lot more minimalist <br /> and modern with ease and speed
                </div>
                <div className='hero-box_input'>
                    <input type="text" placeholder="Search furniture" />
                    <img src={search} alt="search" />
                </div>
            </div>
        </>
    )
}

export default Hero

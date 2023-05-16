import React from 'react'
import AppBar from '../../components/common/AppBar/AppBar'
import './home.scss';
import search from '../../assets/image/icon/search.svg'

const Home = () => {
    return (
        <>
            <div className="hero">
                <AppBar />
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
            </div>
        </>
    )
}

export default Home
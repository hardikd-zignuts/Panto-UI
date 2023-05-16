import React from 'react'
import AppBar from '../../components/common/AppBar/AppBar'
import './home.scss';

const Home = () => {
    return (
        <>
            <div className="hero">
                <AppBar />
                <div className="hero-box">
                    <div className="hero-box_title">
                        Make your interior more minimalistic & modern
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
import React from 'react'
import AppBar from '../../components/common/AppBar/AppBar'
import './home.scss';
import Hero from '../../components/Home/Hero';

const Home = () => {
    return (
        <>
            <div className="hero">
                <AppBar />
                <Hero />
            </div>
        </>
    )
}

export default Home
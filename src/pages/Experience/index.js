import React from 'react'
import box1Right from './../../assets/image/icon/box-1-right.png'
import box1Shadow from './../../assets/image/icon/box-1-shadow.png'
import box1Top from './../../assets/image/icon/box-1-top.png'
import box1 from './../../assets/image/icon/box-1.png'
import arrow from './../../assets/image/icon/right-arrow.svg'
import './experience.scss';



const Experience = () => {
    return (
        <div className='experience'>
            <div className="row">
                <div className="col">
                    <div className="experience-image position-relative">
                        <img src={box1Top} alt="box1Top" />
                        <img src={box1} alt="box1" />
                        <img src={box1Right} alt="box1Right" />
                        <img src={box1Shadow} alt="box1Shadow" />
                    </div>
                </div>
                <div className="col">
                    <div className="experience-box">
                        <div className="experience-box_header">
                            Experiences
                        </div>
                        <div className="experience-box_title">
                            we provide you the best experience
                        </div>
                        <div className="experience-box_content">
                            You don’t have to worry about the result because all of these interiors are made by people who are professionals in their fields with an elegant and lucurious style and with premium quality materials
                        </div>
                        <div className='experience-box_info'>
                            More Info
                            <img src={arrow} alt="arrow" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience
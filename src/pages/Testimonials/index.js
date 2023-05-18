import React from 'react'
import Slider from 'react-slick'
import { ReviewData } from '../../constant/CardData'
import { ReviewSetting } from '../../constant/setting'
import './testimonials.scss'
import ClientCard from '../../components/Testimonials/ClientCard'

const Testimonials = () => {
    return (
        <>
            <div className="testimonials">
                <div className="testimonials-head">
                    Testimonials
                </div>
                <div className="testimonials-title">
                    Our Client Reviews
                </div>
                <div className="container">
                    <div className="review-gallery">
                        <Slider {...ReviewSetting}>
                            {
                                ReviewData.map(ele => {
                                    return (
                                        <ClientCard key={ele.id} {...ele} />
                                    )
                                })
                            }
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonials
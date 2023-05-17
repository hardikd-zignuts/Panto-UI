import React, { useState } from 'react'
import ProductCard from '../../components/Selling/ProductCard'
import { Category, SellingProductData } from '../../constant/CardData'

import './selling.scss'
import Slider from 'react-slick'


const SellingProduct = () => {
    const [isActive, setIsActive] = useState(0)
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                },
            },
            {
                breakpoint: 999,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
        ],
    };

    return (
        <>
            <div className='selling'>
                <div className="selling-head">
                    <div className="selling-title main-title text-center">
                        Best Selling Product
                    </div>
                    <div className="category">
                        {
                            Category.map((cat, index) => {
                                return (
                                    <div onClick={() => setIsActive(index)} key={cat} className={`category-name ${isActive === index && 'active-cat'}`}>{cat}</div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="container">

                    <div className="product-gallery">
                        <Slider {...settings}>
                            {
                                SellingProductData.map(ele => {
                                    return (
                                        <ProductCard key={ele.id} {...ele} />
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

export default SellingProduct

import React, { useState } from 'react'
import ProductCard from '../../components/Selling/ProductCard'
import { Category, SellingProductData } from '../../constant/CardData'

import './selling.scss'
import Slider from 'react-slick'
import settings from '../../constant/setting'


const SellingProduct = () => {
    const [isActive, setIsActive] = useState(0)


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

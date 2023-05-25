import React, { useState } from 'react'
import ProductCard from '../../components/Selling/ProductCard'
import { Category, SellingProductData } from '../../constant/CardData'
import Slider from 'react-slick'
import { ProductSettings } from '../../constant/setting'
import Arrow from './../../assets/image/icon/right-arrow.svg'
import './selling.scss'

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
                                    <button onClick={() => setIsActive(index)} key={cat} ẓclassName={`category-name border-0 ${isActive === index && 'active-cat'}`}>{cat}</button>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="container">
                    <div className="product-gallery">
                        <Slider {...ProductSettings}>
                            {
                                SellingProductData.map(ele => {
                                    return (
                                        <ProductCard key={ele.id} {...ele} />
                                    )
                                })
                            }
                        </Slider>
                        <div className="view-all mx-auto">
                            View All <img src={Arrow} alt="view all" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SellingProduct

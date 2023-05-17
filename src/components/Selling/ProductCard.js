import React from 'react'
import star from '../../assets/image/icon/star.svg'
import add from '../../assets/image/icon/add.svg'

const ProductCard = ({ price, category, name, image }) => {
    return (
        <div className='product-card'>
            <div className='product-card_image'>
                <img src={image} alt="product" />
            </div>
            <div className="text-muted product-card_category">{category}</div>
            <div className="product-card_title">{name}</div>
            <div className="product-card_rating">
                <img src={star} alt="rating" />
            </div>
            <div className="product-card_price">${price}</div>
            <div className="product-card_add">
                <img src={add} alt="add" />
            </div>
        </div>
    )
}

export default ProductCard

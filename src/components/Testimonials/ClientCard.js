import React from 'react'
import star from '../../assets/image/icon/4star.png'
const ClientCard = ({ image, title, name, review, bg }) => {
    return (
        <>
            <div style={{ background: `url('${bg}')` }} className="client-card">
                <div className="client-card_box">
                    <img className='client-card_avatar' src={image} alt="avatar" />
                    <div className="client-card_title">{title}</div>
                    <div className="client-card_name">{name}</div>
                    <div className="client-card_review"><q>{review}</q> </div>
                    <img className='client-card_rating' src={star} alt="star" />
                </div>
            </div>
        </>
    )
}

export default ClientCard
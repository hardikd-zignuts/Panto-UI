import React from 'react'
import { ChoiceData } from '../../constant/CardData'
import './choosingus.scss'
import RightArrow from './../../assets/image/icon/right-arrow.svg'
const ChoosingUs = () => {
    return (
        <div className='choose'>
            <div className="container">
                <div className='row align-items-center'>
                    <div className="col">
                        <div className='choose-title main-title'>Why <br /> Choosing Us</div>
                    </div>
                    {
                        ChoiceData.map(ele => {
                            return (
                                <div key={ele.id} className="col">
                                    <div className="choose-text primary-text">{ele.title}</div>
                                    <div className="choose-sub-text">{ele.description}</div>
                                    <div className='choose-footer'>More Info <img src={RightArrow} alt="RightArrow" /></div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default ChoosingUs

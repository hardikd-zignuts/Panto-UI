import React from 'react'
import { ChoiceData } from '../../constant/CardData'
import RightArrow from './../../assets/image/icon/right-arrow.svg'
import './choosingus.scss';

const ChoosingUs = () => {
    return (
        <div className='choose'>
            <div className="container">
                <div className='row align-items-center flex-column flex-xl-row'>
                    <div className="col-xl-4">
                        <div className='choose-title main-title text-center text-xl-start'>Why Choosing Us</div>
                    </div>
                    <div className="col-xl-8">
                        <div className="row">
                            {
                                ChoiceData.map(ele => {
                                    return (
                                        <div key={ele.id} className="col-12 col-lg-4 text-lg-start text-center">
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
            </div>
        </div>
    )
}

export default ChoosingUs

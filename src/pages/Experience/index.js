import React from 'react'
import ContentBox from '../../components/Experience/ContentBox'
import box1Right from './../../assets/image/icon/box-1-right.png'
import box1Shadow from './../../assets/image/icon/box-1-shadow.png'
import box1Top from './../../assets/image/icon/box-1-top.png'
import box1 from './../../assets/image/icon/box-1.png'

import box21 from '../../assets/image/icon/box-2.1.png'
import box22 from '../../assets/image/icon/box-2.2.png'
import box23 from '../../assets/image/icon/box-2.3.png'
import box23Behind from '../../assets/image/icon/box-2.3-behind.png'
import box23Shadow from '../../assets/image/icon/box-2.3-shadow.png'
import './experience.scss';

const Experience = () => {
    return (
        <div className='experience'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-xl-6 p-0">
                        <div className="experience-image position-relative">
                            <img src={box1Top} alt="box1Top" />
                            <img src={box1} alt="box1" />
                            <img src={box1Right} alt="box1Right" />
                            <img src={box1Shadow} alt="box1Shadow" />
                        </div>
                    </div>
                    <div className="co-12 col-xl-6">
                        <ContentBox header='experiences' title='we provide you the best experience' content='You don’t have to worry about the result because all of these interiors are made by people who are professionals in their fields with an elegant and lucurious style and with premium quality materials' />
                    </div>
                </div>
            </div>
            <div className="material">
                <div className="container-fluid">
                    <div className="row flex-row-reverse">
                        <div className="col-12 col-xl-6 p-0">
                            <div className="material-image">
                                <img src={box21} alt="box1Top" />
                                <img src={box22} alt="box1" />
                                <img src={box23} alt="box1Right" />
                                <img src={box23Behind} alt="box1Shadow" />
                                <img src={box23Shadow} alt="box1Shadow" />
                            </div>
                        </div>
                        <div className="co-12 col-xl-6">
                            <ContentBox header='materials' title='Very serious materials for making furniture' content='Because panto was very serious about designing furniture for our environment, using a very expensive and famous capital but at a relatively low price' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience
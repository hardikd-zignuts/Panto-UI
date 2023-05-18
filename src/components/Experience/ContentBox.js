import React from 'react'
import arrow from '../../assets/image/icon/right-arrow.svg'

const ContentBox = ({ header, title, content }) => {
    return (
        <>
            <div id={header} className="experience-box">
                <div className={"experience-box_header"}>
                    {header}
                </div>
                <div className={"experience-box_title"}>
                    {title}
                </div>
                <div className="experience-box_content">
                    {content}
                </div>
                <div className='experience-box_info'>
                    More Info
                    <img src={arrow} alt="arrow" />
                </div>
            </div>
        </>
    )
}

export default ContentBox

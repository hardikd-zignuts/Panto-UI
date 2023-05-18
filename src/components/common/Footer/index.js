import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './footer.scss'
import fb from '../../../assets/image/icon/fb.png'
import instagram from '../../../assets/image/icon/instagram.png';
import twitter from '../../../assets/image/icon/twitter.png';
const Footer = () => {
    return (
        <>
            <footer className='footer'>
                <Container>
                    <div className="footer-header">
                        <Row>
                            <Col xl={4} sm={12}>
                                <div className='footer-header-box1'>
                                    <div className="footer-header-box1_title">
                                        Panto
                                    </div>
                                    <div className="footer-header-box1_content">
                                        The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.
                                    </div>
                                </div>
                            </Col>
                            <Col xl={8} sm={12}>
                                <div className='footer-header-box2'>
                                    <div className="footer-link">
                                        <li className="link">Services</li>
                                        <li className="link">Email Marketing</li>
                                        <li className="link">Campaigns</li>
                                        <li className="link">Branding</li>
                                    </div>
                                    <div className="footer-link">
                                        <li className="link">Furniture</li>
                                        <li className="link">Beds</li>
                                        <li className="link">Furniture</li>
                                        <li className="link">All</li>
                                    </div>
                                    <div className="footer-link">
                                        <li className="link">Follow Us</li>
                                        <li className="link social-link">
                                            <img src={fb} alt="fb" />
                                            Facebook
                                        </li>
                                        <li className="link social-link">
                                            <img src={twitter} alt="twitter" />
                                            Twitter
                                        </li>
                                        <li className="link social-link">
                                            <img src={instagram} alt="instagram" />
                                            Instagram
                                        </li>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className="footer-bottom d-flex justify-content-between flex-wrap align-items-center">
                        <div className='copyright'>
                            Copyright © 2021
                        </div>
                        <div className='policy d-flex justify-content-between'>
                            <div>Terms & Conditions</div>
                            <div>Privacy Policy</div>
                        </div>
                    </div>
                </Container>
            </footer >
        </>
    )
}

export default Footer
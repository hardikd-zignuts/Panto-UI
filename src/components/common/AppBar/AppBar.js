import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { HiShoppingBag } from 'react-icons/hi'
import './appbar.scss'

const AppBar = () => {
    return (
        <>
            <Navbar className='nav justify-content-center' bg="transparent" expand="lg">
                <Container className='nav-container'>
                    <Navbar.Brand className='navBrand' href="/">Panto</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="mx-auto my-2 my-lg-0 text-center"
                        >
                            <NavDropdown title="Furniture" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="/">Chair</NavDropdown.Item>
                                <NavDropdown.Item href="/">Beds</NavDropdown.Item>
                                <NavDropdown.Item href="/">Sofa</NavDropdown.Item>
                                <NavDropdown.Item href="/">Lamp</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="/" className='navLink'>Shop</Nav.Link>
                            <Nav.Link href="/" className='navLink'>About Us</Nav.Link>
                            <Nav.Link href="/" className='navLink'>Contact</Nav.Link>
                        </Nav>
                        <div className='bag d-none d-lg-inline-block ms-4 ms-lg-0'>
                            <HiShoppingBag size={30} />
                            <div className="bag-badge">0</div>
                        </div>
                    </Navbar.Collapse>
                    <div className='bag d-inline-block d-lg-none ms-4 ms-lg-0'>
                        <HiShoppingBag size={30} />
                        <div className="bag-badge">0</div>
                    </div>
                </Container>
            </Navbar>
        </>
    )
}

export default AppBar
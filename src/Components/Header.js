import React from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const AppHeader = () => {
    return (
        <div className="top p-2 pb-5 ">
            <Container className='top' >
                <Navbar expand="lg" className="d-flex justify-content-between align-items-center">
                    <div>
                        <Navbar.Brand href="#home" className='bold text-white 	letter-spacing: 0.025em;'>TREDZ</Navbar.Brand>
                    </div>
                    <Navbar.Toggle aria-controls="navbarResponsive" />
                    <Navbar.Collapse id="navbarResponsive">
                        <Nav className="mx-auto  product-data">
                            <NavLink to="/product" className='whitenav px-4'>Product</NavLink>
                            <NavLink to="/about" className='whitenav px-4'>About Us</NavLink>
                            <NavLink to="/Careers" className='whitenav px-4'>Careers</NavLink>
                            <NavLink to="/Resources" className='whitenav px-4'>Resources</NavLink>
                            <NavLink to="/pricing" className='whitenav px-4'>Pricing</NavLink>
                        </Nav>
                        <Nav>
                            <Button className='transparent'>Login/Signup</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

                 {/**** *Calculating data *****/}

                <p className='fs-4 pt-5 pb-5'>Calculator</p>
                <div className=" main d-flex justify-content-between mb-5 p-2">
                    <Button className='transparent2 p-2  active'>Equity Delivery</Button>
                    <Button className='transparent2'>Equity Intraday</Button>
                    <Button className='transparent2' >Equity Future </Button>
                    <Button className='transparent2'>Equity Options</Button>
                </div>

            </Container>

        </div>
    );
};

export default AppHeader;

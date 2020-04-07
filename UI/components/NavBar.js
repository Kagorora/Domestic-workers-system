import React from 'react';
import { Nav, Button, Navbar, Col } from 'react-bootstrap';
import logo from '../public/cleaner.svg';
import { signUpPageStyles } from '../styleModules/signup.css.js'

const NavBar = () => {
    return (
            <Navbar expand='lg' style={signUpPageStyles.navBarStyles}>
                <Navbar.Brand href="/" style={signUpPageStyles.navBarBrandStyles}>
                    <h4 style={signUpPageStyles.brandText}>Domestic Workers</h4>
                    <img src={logo} style={signUpPageStyles.logoStyles}/>
                </Navbar.Brand>
                <Nav.Link href="#" className='ml-auto'>
                    <Button variant='success'>Log In</Button>
                </Nav.Link>
            </Navbar>
        
    )
}

export default NavBar;

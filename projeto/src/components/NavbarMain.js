
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../images/logo.png'

import './NavbarMain.module.css';

function NavbarMain() {
    return (
        <>
            <Navbar bg="primary" variant="primary" expand="expand" className='p-2 pt-0' fixed='top'>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className='' />
                <Navbar.Brand href="#home" className='mx-auto p-0'>
                    <img src={logo} alt="logo" width="75" height="75" className="me-5"></img>
                </Navbar.Brand>



                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About us</Nav.Link>
                        <Nav.Link href="#research">Our research</Nav.Link>
                        <Nav.Link href="#help">Help</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}

export default NavbarMain;
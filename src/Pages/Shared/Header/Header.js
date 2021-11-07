import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../Hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();

    return (
        <div style={{ marginBottom: "100px" }}>
            <Navbar collapseOnSelect expand="lg" bg="green" variant="black" fixed='top'  >
                <Container>
                    <Navbar.Brand as={HashLink} to="/home" style={{ color: 'orange' }} >Swapnorupayan Medical Hospital
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={HashLink} to="/home">HOME</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#services">SERVICES</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#doctors">DOCTORS</Nav.Link>
                            <Nav.Link as={HashLink} to="contact#contact">CONTACT</Nav.Link>
                            <NavDropdown title="GALLERY" id="collasible-nav-dropdown">
                                <NavDropdown.Item as={HashLink} to="/doctorg">Doctors</NavDropdown.Item>
                                <NavDropdown.Item as={HashLink} to="/servicesg">Medicadle Equipment</NavDropdown.Item>

                            </NavDropdown>
                            <Nav.Link as={HashLink} to="/aboutus">ABOUT US</Nav.Link>
                        </Nav>
                        <Nav>
                            {user?.email ?
                                <Button className='btn btn-primary bg-danger' onClick={logOut} variant="light">Logout</Button> :
                                <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                            <Navbar.Text>
                                <a href="#login" className='mx-2 my-5'>{user?.displayName}</a>
                            </Navbar.Text>
                            <Navbar.Text>
                                <a href="#login"><img style={{ width: '40px', height: '40px', borderRadius: '20px' }} src={user?.photoURL} alt="" /></a>
                            </Navbar.Text>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
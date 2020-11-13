import React, {Component} from 'react';
import {
    Container,
    Navbar,
    Nav,
    Form,
    FormControl,
    Button
} from 'react-bootstrap';
import logo from './kosh430.png';
import {Link} from 'react-router-dom';
import './header.css';


class Header extends Component {
    render() {
        return (
            <>
                <Navbar className='navbar' fixed='top' collapseOnSelect expand='md' bg='dark' variant='dark'>
                    <Container>
                        <Navbar.Brand href='/'>
                            <img src={logo}
                                height='30'
                                width='30'
                                className='d-inline-block align-top'
                                alt='logo'/>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                        <Navbar.Collapse id='responsive-navbar-nav'>
                            <Nav className='mr-auto' >
                                <Link className=' btn btn-link ' to='/'>Home</Link>
                                <Link className=' btn btn-link' to='/about'>About Us</Link>
                                <Link className=' btn btn-link' to='/contacts'>Contacts</Link>
                                <Link className=' btn btn-link' to='/blog'>Blog</Link>
                            </Nav>
                            <Form inline>
                                <FormControl type='text' placeholder='search' className='mr-sm-2'/>
                                <Button variant='outline-info'>Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        );
    }
}


export default Header;

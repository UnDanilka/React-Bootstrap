import React, { Component } from 'react';
import { Container, Tab, Row, Col, Nav, Navbar } from 'react-bootstrap';
import './about.css';
import firstIMG from './pexels-humphrey-muleba-1647120.jpg';
import secondIMG from './pexels-mario-cuadros-4075993.jpg';
import thirdIMG from './pexels-mihai-vlasceanu-1400249.jpg';
import forthIMG from './pexels-sergio-souza-5046951.jpg';
import fifthIMG from './pexels-tanya-satina-5609156.jpg'; 

class About extends Component {
    render() {
        return (
            <div className='about'>
                <Container>
                    <Tab.Container id='left-tabs-example' defaultActiveKey='first'>
                        <Row>
                            <Col sm={3}>
                                
                                <Nav className='flex-column mt-2 nav'>
                                    <Nav.Item>
                                        <Nav.Link className='link' eventKey='first'>Design</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link className='link' eventKey='second'>Team</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link className='link' eventKey='third'>IT</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link className='link' eventKey='forth'>Frameworks</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link className='link' eventKey='fifth'>Libraries</Nav.Link>
                                    </Nav.Item>
                                </Nav>    
                            </Col>
                            <Col sm={9}>
                                <Tab.Content>
                                    <Tab.Pane eventKey='first'>
                                        <img 
                                        className='img'
                                        src={firstIMG}
                                        alt='first'
                                        />    
                                        <p>first</p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey='second'>
                                        <img 
                                        className='img'
                                        src={secondIMG}
                                        alt='second'
                                        />    
                                        <p>second</p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey='third'>
                                        <img 
                                        className='img'
                                        src={thirdIMG}
                                        alt='third'
                                        />    
                                        <p>third</p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey='forth'>
                                        <img 
                                        className='img'
                                        src={forthIMG}
                                        alt='forth'
                                        />    
                                        <p>forth</p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey='fifth'>
                                        <img 
                                        className='img'
                                        src={fifthIMG}
                                        alt='fifth'
                                        />    
                                        <p>fifth</p>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </Container>
            </div>
        );
    }
}

export default About;
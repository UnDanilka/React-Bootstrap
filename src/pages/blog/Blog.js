import React, {Component} from 'react';
import './blog.css';
import {
    Container,
    Row,
    Col,
    Media,
    ListGroup,
    Card
} from 'react-bootstrap';

class Blog extends Component {
    render() {
        return (
            <div className='blog'>
                <Container>
                    <Row className='rowFirst'>
                        <Col md={9} >
                            <Media className='m-5'>
                                <img width={150}
                                    height={150}
                                    className='mr-3'
                                    src='https://images.pexels.com/photos/4558702/pexels-photo-4558702.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                                    alt='first'/>
                                <Media.Body>
                                    <h5>Blog post</h5>
                                    <h6>Look at this post</h6>
                                </Media.Body>
                            </Media>
                            <Media className='m-5'>
                                <img width={150}
                                    height={150}
                                    className='mr-3'
                                    src='https://images.pexels.com/photos/2618782/pexels-photo-2618782.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                                    alt='first'/>
                                <Media.Body>
                                    <h5>Blog post</h5>
                                    <h6>Look at this post</h6>
                                </Media.Body>
                            </Media>
                            <Media className='m-5'>
                                <img width={150}
                                    height={150}
                                    className='mr-3'
                                    src='https://images.pexels.com/photos/4825336/pexels-photo-4825336.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                                    alt='first'/>
                                <Media.Body>
                                    <h5>Blog post</h5>
                                    <h6>Look at this post</h6>
                                </Media.Body>
                            </Media>
                        </Col>
                        <Col md='3'>
                            <h5 className='text-center mt-5'>Category</h5>
                            <Card >
                                <ListGroup variant='flush'>
                                    <ListGroup.Item className='sideCategory'>HTML</ListGroup.Item>
                                    <ListGroup.Item className='sideCategory'>JS</ListGroup.Item>
                                    <ListGroup.Item className='sideCategory'>C++</ListGroup.Item>
                                </ListGroup>
                            </Card>
                            <Card className='mt-3 side'>
                                <Card.Body >
                                    <Card.Title>Side widget</Card.Title>
                                    <Card.Text>This is side widget</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    
                </Container>
            </div>
        );
    }
}

export default Blog;

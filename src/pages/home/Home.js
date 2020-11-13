import React, {Component} from 'react';
import './home.css';
import Slider from '../../components/slider/Slider';
import {Card, CardDeck, Container, Button} from 'react-bootstrap';

class Home extends Component {
    render() {
        return (
            <div className='home'>
            <Slider/>
            <Container >
                <h2 className='text-center m-4'>Our team</h2>
                <CardDeck >
                    <Card >
                        <Card.Img
                        className='cards'
                        variant='top'
                        src='https://images.pexels.com/photos/4529106/pexels-photo-4529106.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=600&w=900'
                        />
                        <Card.Body >
                            <Card.Title>Road</Card.Title>
                            <Card.Text>Down the hill</Card.Text>
                            <Button variant='dark'>Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img 
                        className='cards'
                        variant='top'
                        src='https://images.pexels.com/photos/3728336/pexels-photo-3728336.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                        />
                        <Card.Body>
                            <Card.Title>Flower</Card.Title>
                            <Card.Text>Feel it</Card.Text>
                            <Button variant='dark'>Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img 
                        className='cards'
                        variant='top'
                        src='https://images.pexels.com/photos/5277693/pexels-photo-5277693.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                        />
                        <Card.Body>
                            <Card.Title>Ocean</Card.Title>
                            <Card.Text>Go deeper</Card.Text>
                            <Button variant='dark'>Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </CardDeck>
            </Container>
            </div>
        );
    }
}

export default Home;

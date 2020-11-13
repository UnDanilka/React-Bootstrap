import React, {Component} from 'react';
import {Carousel} from 'react-bootstrap';
import firstImg from './pexels-aleksey-kuprikov-3551201.jpg';
import secondImg from './pexels-krivec-ales-552785.jpg';
import thirdImg from './pexels-markus-spiske-4040331.jpg';
import './slider.css';


class Slider extends Component {
    render() {
        return (
            <Carousel >
                <Carousel.Item className='item' interval={100000}>
                    <img className='d-block w-100 pic'
                        src={firstImg}
                        alt='img1'/>
                    <Carousel.Caption>
                        <h3>First Image</h3>
                        <p>Look at this</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='item' interval={100000}>
                    <img className='d-block w-100 pic'
                        src={secondImg}
                        alt='img2'/>
                    <Carousel.Caption>
                        <h3>Second Image</h3>
                        <p>Look at this</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='item' interval={100000}>
                    <img className='d-block w-100 pic'
                        src={thirdImg}
                        alt='img3'/>
                    <Carousel.Caption>
                        <h3>Third Image</h3>
                        <p>Look at this</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}

export default Slider;

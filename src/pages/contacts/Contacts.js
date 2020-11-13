import React, { Component } from 'react';
import { Container, Form, Button} from 'react-bootstrap';
import './contacts.css';

class Contacts extends Component {
    render() {
        return (
            <div className='contacts'>
                <Container>
                    <h1>Contact us</h1>
                    <Form>
                        <Form.Group controlId='formBasicEmail'>
                            <Form.Label>Email adress</Form.Label>
                            <Form.Control type='email' placeholder='enter email'/>
                            <Form.Text>
                                We will never share it!
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId='formBasicPassword'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control as='textarea' rows='3'/>
                        </Form.Group>
                        <Form.Group controlId='formBasicCheckbox'>
                            <Form.Check type='checkbox' label='check me out'/>
                        </Form.Group>
                        <Button variant='primary' type='submit'> Submit </Button>
                    </Form>
                </Container>
            </div>
        );
    }
}

export default Contacts;
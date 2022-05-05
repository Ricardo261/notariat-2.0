import React from 'react';
import axios from 'axios';
import { Container, Row, Col, Card } from 'react-bootstrap';

const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/annuaire/notaires'
})

class Notaires extends React.Component {

    state = {
        notaires: []
    }

    constructor() {
        super();
        api.get('/').then(res => {
            console.log(res.data)
            this.setState({ notaires: res.data })
        })
    }

    render() {
        return (
            this.state.notaires.map(notaire => {
                console.log(notaire);
                return (
                    <Container >
                    <Row className="justify-content-md-center">
                            <Col md={4}>
                                <Card border='dark' style={{ width: '18rem' }} className="mx-auto my-2">
                                    <Card.Body>
                                        <Card.Title>{notaire.nom}</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">{notaire.prenom}</Card.Subtitle>
                                    </Card.Body>
                                </Card>
                            </Col>
                    </Row>
                    </Container>
                )
            })
        )
    }
}

export default Notaires
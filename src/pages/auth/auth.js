import { 
    FormAuth,
    Logo
} from './styles'
import { Button, Col, Container, Form, Row } from "react-bootstrap";

import logo from '../../assets/logo.png';

export function Auth () {
    return (
        <>
            <FormAuth>
                <Container>
                    <Row className="justify-content-md-center">
                        <Col md={5}>
                            <Logo>
                                <img src={logo} />
                            </Logo>
                            <Container>
                                <Form>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" />
                                    </Form.Group>

                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>
                                    <Button variant="" type="submit">
                                        Entrar
                                    </Button>
                                </Form>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </FormAuth>
        </>
    )
}
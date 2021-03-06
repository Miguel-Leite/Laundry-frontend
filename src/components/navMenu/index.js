import {
    Navbar,
    Nav,
    NavDropdown,
    Container
} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';
import './index.css';

export function NavMenu() {
    return (
        <>
            <Navbar expand="lg" className='navbar-dark'>
                <Container>
                    <NavLink className='navbar-brand' to='/'>
                        <img src={logo} alt='Logo System'/>
                    </NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            {/* <Nav.Link href="#">Home</Nav.Link> */}
                            {/* <Nav.Link href="#">Link</Nav.Link> */}
                            <NavDropdown title="Minha conta" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#">Perfil</NavDropdown.Item>
                                <NavDropdown.Item href="#">Configurações</NavDropdown.Item>
                                <NavDropdown.Item href="#">Sair</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
import {
    Navbar,
    Nav,
    NavDropdown,
    Container
} from 'react-bootstrap';

// import {
//     MdMenu,
//     MdEmail,
//     MdBusAlert,
//     MdViewArray
// } from 'react-icons/md'
import './index.css';

export function NavMenu() {
    return (
        <>
            <Navbar expand="lg" className='navbar-dark'>
                <Container>
                    <Navbar.Brand href="#">Laundry</Navbar.Brand>
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
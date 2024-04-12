import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const NavbarInicio = () => {
  return (
    <Navbar bg="info" data-bs-theme="dark" expand="lg" className='fixed-top'>
    <img src='https://github.com/CabaninhaOrgBr/CabaninhaOrgBr.github.io/raw/main/Cabaninha_Logo_75_anos.png' width="60px" alt="logo" href="#home"/>
    <Navbar.Brand href="#home">Cabaninha</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#evento">Eventos</Nav.Link>
        <NavDropdown title="Cáritas" id="basic-nav-dropdown">
          <NavDropdown.Item href="">Trabalhe conosco</NavDropdown.Item>
          <NavDropdown.Item href="https://feliveira123.github.io/Projeto-Cabaninha/">
            Cestas básicas
          </NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Enxovais</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#palestras">Palestras</Nav.Link>
        <Nav.Link href="#Cursos">Cursos</Nav.Link>
        <Nav.Link href="#link">Biblioteca</Nav.Link>
        <Nav.Link href="#link">História</Nav.Link>
      </Nav>
    </Navbar.Collapse>
</Navbar>
  )
}

export default NavbarInicio
import React from "react";
import "./navbar.style.css"
import { Container, Navbar, Nav } from 'react-bootstrap'

function NavBar() {
  return (
    <Container fluid className="navbar-div">
    <Navbar className="navbar" bg="success" variant="light" expand="lg">

      <Navbar.Brand href="/">Music-Store</Navbar.Brand>
    
        <Nav className="mr-auto">
          <Nav.Item>
            <Nav.Link href="/"> Home </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href="/adminController/adminPortalLogin.html">Admin Service</Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href="/userWelcome.html">User Service</Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href="/cart.html">Cart</Nav.Link>
          </Nav.Item>
        </Nav>
        
			  <Nav className="ml-auto"> 
				  <Nav.Item>
					  <Nav.Link href="/logout.html"> LogOut </Nav.Link>
				  </Nav.Item>
			  </Nav>

		  </Navbar>
    </Container>
  );
}

export default NavBar
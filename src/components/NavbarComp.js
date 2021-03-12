import { Link } from "react-router-dom";
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';

function NavbarComp() {
  return (
    <Navbar collapseOnSelect className="color-nav" fixed="top" expand="lg" variant="dark">
      <Navbar.Brand href="/">Home</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/#showcase">Showcase</Nav.Link>
          <Nav.Link href="/pricing">Pricing</Nav.Link>
          <NavDropdown title="Tabs" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/">Home</NavDropdown.Item>
            <NavDropdown.Item href="/about">
              About
            </NavDropdown.Item>
            <NavDropdown.Item href="/contact">Contact</NavDropdown.Item>
            <NavDropdown.Divider />
            {/* <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item> */}
          </NavDropdown>
        </Nav>
        {/* <Nav>
          <Nav.Link href="#deets">More deets</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            Dank memes
          </Nav.Link>
        </Nav> */}
      </Navbar.Collapse>
    </Navbar>
    // <ul>
    //     <Link to='/'>Home</Link>
    //     <Link to='/about'>About</Link>
    //     <Link to='/contact'>Contact</Link>
    // </ul>
  );
}

export default NavbarComp;

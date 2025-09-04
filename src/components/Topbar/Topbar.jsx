import { Navbar, Nav, Container, NavDropdown, Button } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import Logo from "../../assets/Logo.png"

export default function Topbar() {
  return (
    <div className="container-fluid fixed-top">
      <Container>
        <Navbar expand="lg" bg="light" className="py-3">
          <Navbar.Brand as={NavLink} to="/" className="me-1">
            <img src={Logo} className="logo" alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarCollapse" className="me-3">
            <span className="fa fa-bars text-primary"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="navbarCollapse">
            <Nav className="ms-lg-auto mx-xl-auto">
              <Nav.Link as={NavLink} to="/" end>
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/about">
                About
              </Nav.Link>
              <NavDropdown title="Departments" id="pages-dropdown">
                <NavDropdown.Item as={NavLink} to="/departments/education">
                  Education
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/departments/masajid">
                  Masajid
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/departments/welfare">
                  Welfare
                </NavDropdown.Item>
              </NavDropdown>
              
              <Nav.Link as={NavLink} to="/projects">
                Projects
              </Nav.Link>
              <Nav.Link as={NavLink} to="/blog">
                Blogs
              </Nav.Link>

              <Nav.Link as={NavLink} to="/contact">
                Contact
              </Nav.Link>
            </Nav>
            <Button
              as={NavLink}
              to="/donate"
              variant="primary"
              className="py-2 px-4 d-none d-xl-inline-block btn-bg-primary me-3"
            >
              Donate
            </Button>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  )
}

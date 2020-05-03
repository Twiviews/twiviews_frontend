import React, {useState} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';
import './Navbar.css';


const AppNavbar = () => {

    const initialState = {
        isOpen: false
    }
    const [openVal, setOpenVal] = useState(initialState)
    
    return(
        <div>
            <Navbar container="dark" dark expand="sm">
              <Container className="container">
                  <NavbarBrand className="navbar-brand" href="/">
                      RateDB
                  </NavbarBrand>
                  <NavbarToggler onClick={() => setOpenVal({isOpen:!openVal.isOpen})}/>
                  <Collapse isOpen= {openVal.isOpen} navbar>
                  <Nav className="ml-auto" navbar>
                      <NavItem>
                          <NavLink href="">
                              Home
                          </NavLink>
                      </NavItem>
                  </Nav>
                  </Collapse>
              </Container>
            </Navbar>
        </div>
      );
}



export default AppNavbar;
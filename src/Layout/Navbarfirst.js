import React, {useState} from 'react'
import {Navbar, Nav,Button,Form,FormControl} from 'react-bootstrap';
import {Link} from 'react-router-dom'
function Navbarfirst({FilterByName,name}) {

  const [title, setTitle] = useState("");
  console.log(name)
  const handleFilterInput = (event) => {
         const  {target}  = event 
         const {name,value}  = target
  }
    return (
        <div>
        
        <Navbar bg="dark" expand="lg">
        <div  className="container-fluid">
              <Navbar.Brand href="#home" style={{color:'white'}}>Nader</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Link to="/"   style={{color:'white'}}>
                  
                  
            
                  Home
                  
                  </Link>
                  <Link to="/about"    style={{color:'white'}}>
                  
                      About

                  
                  </Link>
                  <Link to="/contact"    style={{color:'white'}}>
                  
                   Contact
                  </Link>
                  <Link to={`create/  `}   style={{color:'white'}}>
                  
                  
                  
                               Service
                  </Link>

            
                </Nav>
                <Form inline>
                  <FormControl 
                  onChange={handleFilterInput}
                  name="title"
                  
                  type="text" placeholder="Search" className="mr-sm-2" />
                  <Button variant="outline-success"   >Search</Button>
                </Form>
              </Navbar.Collapse>
              </div>
            </Navbar>
        </div>
    )
}

export default Navbarfirst

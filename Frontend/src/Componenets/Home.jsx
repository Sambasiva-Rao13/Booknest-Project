// src/components/Navbar.js

import React from 'react';
import { Navbar, Nav, Container, Row, Col, Card, Button } from 'react-bootstrap';
import {Link } from "react-router-dom"

const Home = () => {

  return (
    <div>
      <Navbar bg="" variant="dark" expand="lg" style={{backgroundColor:"blue"}}>
        <Container>
          <Navbar.Brand ><Link to='/' style={{color:'white',textDecoration:"none"}}>BookStore</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto" >
              <Link to="/login" style={{padding:"10px",color:"white",textDecoration:"none"}}>User</Link>
              <Link to="/slogin" style={{padding:"10px",color:"white",textDecoration:"none"}}>Seller</Link>
              <Link to="/alogin" style={{padding:"10px",color:"white",textDecoration:"none"}}>Admin</Link>   
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Main Content */}
      <Container className="mt-5">
        <Row>
          <Col md={12} className="text-center mb-4">
            <h1>Welcome to BookStore</h1>
            <p className="lead">Your one-stop destination for books</p>
          </Col>
        </Row>
        
        <Row className="justify-content-center">
          <Col md={4} className="mb-4">
            <Card className="text-center h-100">
              <Card.Body>
                <Card.Title>For Readers</Card.Title>
                <Card.Text>
                  Browse and purchase books from our extensive collection.
                </Card.Text>
                <Link to="/login">
                  <Button variant="primary">Login as User</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          
          <Col md={4} className="mb-4">
            <Card className="text-center h-100">
              <Card.Body>
                <Card.Title>For Sellers</Card.Title>
                <Card.Text>
                  List and sell your books to our community of readers.
                </Card.Text>
                <Link to="/slogin">
                  <Button variant="success">Login as Seller</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          
          <Col md={4} className="mb-4">
            <Card className="text-center h-100">
              <Card.Body>
                <Card.Title>For Administrators</Card.Title>
                <Card.Text>
                  Manage users, sellers, and monitor the platform.
                </Card.Text>
                <Link to="/alogin">
                  <Button variant="warning">Login as Admin</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;

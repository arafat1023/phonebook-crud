import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import CreatePhone from "./components/create-phone";
import Task1 from "./task1";
import EditPhone from "./components/edit-phone.component";
import PhoneList from "./components/phone-list.component";

function App() {
  return (<Router>
    <div className="App">
        <Navbar bg="dark" variant="dark">
          <Container>


            <Nav className="justify-content-end">
              <Nav>
                <Link to={"/create-phone"} className="nav-link">
                  Create PhoneBook
                </Link>
              </Nav>


              <Nav>
                <Link to={"/phone-list"} className="nav-link">
                  PhoneBook List
                </Link>
              </Nav>

              <Nav>
                <Link to={"/Task1"} className="nav-link">
                 Factorial Task
                </Link>
              </Nav>
            </Nav>

          </Container>
        </Navbar>


      <Container>
        <Row>
          <Col md={12}>
            <div className="wrapper">
              <Switch>
                <Route exact path='/' component={CreatePhone} />
                <Route path="/create-phone" component={CreatePhone} />
                <Route path="/edit-phone/:id" component={EditPhone} />
                <Route path="/phone-list" component={PhoneList} />
                <Route path="/task1" component={Task1} />
              </Switch>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </Router>);
}

export default App;
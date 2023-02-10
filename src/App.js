import 'bootstrap/dist/css/bootstrap.min.css';
import { BsFillCalendarDateFill } from "react-icons/bs";
import {Container, Col, Row } from 'react-bootstrap';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col >
            <h1 className='text-center fw-light mt-3'><BsFillCalendarDateFill />Appointments </h1>
          </Col>
        </Row>
        <Row className='justify-content-center'>
          <Col md='4'> 
            <Search />
          </Col>
        </Row>
        <Row>    
          <Col md={3}>
            <h3>
              Hello. bootstrap!
            </h3>
            </Col>
            <Col md={3}>
            <h3>
              Hello. bootstrap!
            </h3>
            </Col>
            <Col md={3}>
            <h3>
              Hello. bootstrap!
            </h3>
            </Col>
            <Col md={3}>
            <h3>
              Hello. bootstrap!
            </h3>
            </Col>
        </Row>
      </Container>
    
    </div>
  );
}

export default App;

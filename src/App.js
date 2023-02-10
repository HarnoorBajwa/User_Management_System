import 'bootstrap/dist/css/bootstrap.min.css';
import { BsFillCalendar2CheckFill } from "react-icons/bs";
import {Container, Col, Row } from 'react-bootstrap';
import Search from './components/Search';
import AddAppointment from './components/AddAppointment';

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col >
            <h1 className='text-center fw-light mt-3'><BsFillCalendar2CheckFill /> Appointments </h1>
          </Col>
        </Row>

        <Row className = "justify-content-center">
          <AddAppointment />
        </Row >

        <Row className='justify-content-center'>
          <Col md='4'> 
            <Search />
          </Col>
        </Row> 
      </Container>
    
    </div>
  );
}

export default App;

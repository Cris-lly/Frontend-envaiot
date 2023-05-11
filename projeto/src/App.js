import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarMain from './components/NavbarMain';
import { Button, Container, Row, Col } from 'react-bootstrap';
import './css/overwhite.css'
import icon from './images/icon-point.png'
import './App.css';

function App() {
  return (
    <div className="App bg-primary min-vh-100">
      <NavbarMain />
      <Container className='pt-5'>
        <Row className='p-1 mt-3'>
          <Col className="bg-secondary m-4 rounded" style={{ height: '430px' }}>
            <img src={icon} alt="logo" width="40" height="24" className='d-flex'></img>
          </Col>
          <Col className="bg-secondary m-4 rounded" style={{ height: '430px' }}>
            <img src={icon} alt="logo" width="40" height="24" className='d-flex'></img>
          </Col>
        </Row>
      </Container>
      <Container className="mt-3">
        <Button variant="outline-primary">SUBMIT</Button>
      </Container>
    </div >
  );
}

export default App;

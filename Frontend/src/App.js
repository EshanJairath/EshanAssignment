//jshint esversion:6
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row } from 'react-bootstrap';
import InputArea from './InputArea';
import Header from './Header';
import Footer from './Footer';
function App() {
  return (
    <div className="App container">
      <Row>
        <Col lg={10} >
          <Header/>
          <InputArea/>
          <Footer/>
        </Col>
      </Row>
    </div>
  );
}

export default App;

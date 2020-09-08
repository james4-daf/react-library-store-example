import React from 'react';
import './App.css';
import List from './components/List';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Library Store</h1>
      </header>
      <main>
        <Container fluid>
          <Row>
            <Col>
              <List title='Books' />
            </Col>
            <Col>
              <List title='Videos' />
            </Col>
          </Row>
        </Container>
      </main>
      <footer>
      </footer>
    </div>
  );
}

export default App;

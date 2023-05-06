import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import MainLayout from './components/layout/MainLayout/MainLayout';
import Home from './components/pages/Home/Home';

const App = () => {
  return (
    <Container>
      <MainLayout>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </MainLayout>
    </Container>
  )
}

export default App;

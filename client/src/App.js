import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import MainLayout from './components/layout/MainLayout/MainLayout';
import Home from './components/pages/Home/Home';
import NotFound from './components/pages/NotFound/NotFound';

const App = () => {
  return (
    <Container>
      <MainLayout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </MainLayout>
    </Container>
  )
}

export default App;

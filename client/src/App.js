import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import MainLayout from './components/layout/MainLayout/MainLayout';
import Home from './components/pages/Home/Home';
import NotFound from './components/pages/NotFound/NotFound';

const App = () => {
  return (
    <MainLayout>
      <Container>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Container>
    </MainLayout>
  )
}

export default App;

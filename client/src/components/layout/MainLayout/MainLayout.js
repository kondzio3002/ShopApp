import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Info from '../../views/Info/Info';

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Info />
      <Footer />
    </div>
  );
};

export default MainLayout;
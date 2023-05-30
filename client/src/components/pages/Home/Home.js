import Products from "../../features/Products/Products";
import Gallery from "../../views/Gallery/Gallery";
import Sale from "../../views/Sale/Sale";

const Home = () => {
  return (
    <div>
      <Sale />
      <Products />
      <Gallery />
    </div>
  );
};

export default Home;
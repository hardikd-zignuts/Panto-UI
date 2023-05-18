import './assets/scss/App.scss'
import ChoosingUs from './pages/ChoosingUs';
import Home from './pages/Home/Home';
import SellingProduct from './pages/Selling';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Experience from './pages/Experience';
import Footer from './components/common/Footer';
import Testimonials from './pages/Testimonials';

function App() {

  return (
    <>
      <Home />
      <ChoosingUs />
      <SellingProduct />
      <Experience />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;

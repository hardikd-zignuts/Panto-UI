import './assets/scss/App.scss'
import ChoosingUs from './pages/ChoosingUs';
import Home from './pages/Home/Home';
import SellingProduct from './pages/Selling';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Experience from './pages/Experience';

function App() {

  return (
    <>
      <Home />
      <ChoosingUs />
      <SellingProduct />
      <Experience />
    </>
  );
}

export default App;

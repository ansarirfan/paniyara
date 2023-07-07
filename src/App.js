import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Slider from './components/slider/Slider';
import './App.css';
import Vertual from './components/vertuals/Vertual';
import Product from './components/products/Product';
import Testimonial from './components/testimonial/Testimonial';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Slider/>
      <Vertual/>
      <Product />
      <Testimonial/>
      <Footer/>
    </div>
  );
}

export default App;

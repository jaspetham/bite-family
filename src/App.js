import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import DietPlan from './components/DietPlan';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import Stats from './components/Stats';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <About/>
      <DietPlan/>
      <Services/>
      <Portfolio/>
      <Pricing/>
      <Stats/>
      <Testimonial/>
      <Footer/>
      <BackToTop/>
    </div>
  );
}

export default App;

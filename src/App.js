import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import DietPlan from './components/DietPlan';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import Team from './components/Team';
import Testimonial from './components/Testimonial';

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Map from './components/Map';

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
      <Team/>
      <Testimonial/>
      <Map/>
    </div>
  );
}

export default App;

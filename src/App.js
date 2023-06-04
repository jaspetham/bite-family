import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import DietPlan from './components/DietPlan';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import Team from './components/Team';

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
    </div>
  );
}

export default App;

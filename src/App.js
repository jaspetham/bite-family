import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import DietPlan from './components/DietPlan';
import Services from './components/Services';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <About/>
      <DietPlan/>
      <Services/>
      <Portfolio/>
    </div>
  );
}

export default App;

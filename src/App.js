
import './App.css';
import Navbar from './components/Navbar';
import { HeroSection } from './components/HeroSection';
function App() {
  return (
    <>
    <div className='HeroSection'>
      <Navbar/>
      <HeroSection/>
    </div>
    </>
  );
}

export default App;

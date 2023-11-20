import './App.css';
import Experience from './Experience/Experience';
import Footer from './Footer/Footer';
import Hero from './Hero/Hero'; 
import Projects from './Projects/Projects';

function App() {
  return (
    <div className=''>
      <div className="App container mx-auto">
        <Hero/>
        <Experience/>
        <Projects/>
      </div> 
      <Footer/>
    </div>
  );
}

export default App;

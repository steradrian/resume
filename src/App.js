import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from "./components/Navbar";
import Header from './components/Header';
import Particles from 'react-particles-js';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Experience from './components/Experience';


function App() {
  return (
    <div className="App">
      <Particles params={{
        particles: {
          number: {
            value: 30,
            density: {
              enable: true, 
              value_area:900
            }
          }, 
          shape: {
            type: "triangle",
            stroke: {
              width: 6,
              color: "rgb(0,191,166)",
            }
          }
        }
      }}/>
      <Navbar />
      <Header />
      <AboutMe />
      <Skills />
      <Experience />
    </div>
  );
}

export default App;

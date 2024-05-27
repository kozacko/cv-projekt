import Header from './components/Header';
import Summary from './components/Summary';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Calculator from './components/Calculator';

import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'



function App() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-8">
          <Header />
          <Summary />
          <Experience />
          <Education />
        </div>
        <div className="col-lg-4">
          <Skills />
          <Contact />
          <Calculator />
          
        </div>
      </div>
    </div>
  );
}

export default App;
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import PersonalProject from './pages/PersonalProject';
import ProfessionalProject from './pages/ProfessionalProject';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element = {<Home/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/personal_project/:id" element={<PersonalProject/>} /> 
          <Route path="/professional_project/:id" element={<ProfessionalProject/>} /> 
          <Route path="/experience" element={<Experience/>} />
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;

import './App.css';
import Hello from './components/Hello';
import Header from './components/Header';
import Banner from './components/Banner';
import About from './components/About';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Painel from './pages/Painel';

function App() {
  return (
    <>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/painel">Painel</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/painel" element={<Painel />} />
        </Routes>

        <Header />
        <Banner />
        <About />
        <h1>Hello World</h1>
        <Hello />
      </Router>
    </>
  );
}

export default App;

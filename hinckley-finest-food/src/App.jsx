
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import {Header} from './components/NavBar';
import Home from './pages/Home';
import Hours from './pages/Hours';
import About from './pages/About';
import Contact from './pages/Contact';
import Menu from './pages/Menu';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hours" element={<Hours />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/menu" element={<Menu />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
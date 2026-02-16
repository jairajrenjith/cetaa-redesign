import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Renovation from './pages/Renovation';
import CustomCursor from './components/CustomCursor';

export default function App() {
  return (
    <Router>
      <CustomCursor />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/renovation" element={<Renovation />} />
      </Routes>
    </Router>
  );
}
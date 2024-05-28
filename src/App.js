import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './component/Home';
import About from './component/About';
import Portfolio from './component/Portfolio';
import BlogPost1 from './component/BlogPost1';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/BlogPost1" element={<BlogPost1 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

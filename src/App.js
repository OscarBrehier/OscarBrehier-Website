import {useState} from 'react';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Acceuil, About} from './pages/index';
import {Navbar, Footer} from './components/index';

const App = () => {

  return (
    <Router>
      <div className="h-auto bg-[#f5f5f7]">

        <div className="h-[95%] font-poppins w-full">

            <Navbar />

            <Routes>
                <Route path="/" element={<Acceuil />} exact />
                <Route path="/about" element={<About />} exact />
                <Route path="*" element={<div>404 - NOT FOUND</div>} />
            </Routes>

            <Footer />

        </div>

      </div>
    </Router>
  );
 
}

export default App; 

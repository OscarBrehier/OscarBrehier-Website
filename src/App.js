import {useState} from 'react';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Acceuil, About} from './pages/index';
import {Navbar} from './components/index';

const App = () => {

  return (
    <Router>
      <div className="relative h-auto">

        <div className="h-[95%] font-poppins w-full absolute z-50">

            <Navbar />

            <Routes>
                <Route path="/" element={<Acceuil />} exact />
                <Route path="/about" element={<About />} exact />
                <Route path="*" element={<div>404 - NOT FOUND</div>} />
            </Routes>

        </div>

      </div>
    </Router>
  );
 
}

export default App; 

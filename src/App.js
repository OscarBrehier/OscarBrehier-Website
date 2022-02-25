import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Acceuil, About, NotFound, Projects} from './pages/index';
import {Navbar, Footer} from './components/index';

const App = () => {

  return (
    <Router>
      <div className="h-auto bg-[#f5f5f7]">
        <div className="font-poppins w-full">
          <div>
            <Navbar />

            <Routes>
              <Route path="/" element={<Acceuil />} exact />
              <Route path="/about" element={<About />} exact />
              <Route path="/projects" element={<Projects />} exact />
              <Route path="/contact" element={<div></div>} exact />
              <Route path="*" element={<NotFound />} />
            </Routes>

            <Footer />
          </div>
        </div>
      </div>
    </Router>
  );
 
}

export default App; 

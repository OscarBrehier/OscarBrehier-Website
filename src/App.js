import {BrowserRouter as Router, Routes, Route } from "react-router-dom";


import {Acceuil, About} from './pages/index';
import {Navigation} from './components/index';

const App = () => {

  return (
    <Router>
      <div className="font-poppins h-auto w-full">
        <Navigation />

        <Routes>
          <Route path="/" element={<Acceuil />} exact />
          <Route path="/about" element={<About />} exact />
          <Route path="*" element={<div>404 - NOT FOUND</div>} />
        </Routes>
      </div>
    </Router>
  );

}

export default App;

import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Acceuil, About} from './pages/pages';
import Navigation from './components/Navigation';

const App = () => {

  return (
    
    <Router>
      <div className="h-auto w-full font-poppins"> 

        <Navigation />

        <Routes>
          
          <Route path='/' element={<Acceuil/>} exact/>
          <Route path='/about' element={<About/>} exact />
          <Route path='*' element={<div>404 - NOT FOUND</div>}/>

        </Routes>

      </div>
    </Router>

  );

}

export default App;

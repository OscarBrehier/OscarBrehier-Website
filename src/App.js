import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Acceuil} from './pages/pages';
import Navigation from './components/Navigation';

const App = () => {

  return (
    
    <Router>
      <div className="h-screen w-full bg-[#f7f2f2]"> 

        <Routes>
          
          <Route path='/' element={<Acceuil/>} exact/>
          <Route path='/about'/>
          <Route path='*' element={<div>404 - NOT FOUND</div>}/>

        </Routes>

      </div>
    </Router>

  );

}

export default App;

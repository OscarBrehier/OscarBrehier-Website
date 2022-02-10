import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Acceuil} from './pages/pages';

const App = () => {

  return (
    
    <Router>
      <div className="App"> 
    
        <Routes>
          
          <Route path='/' element={<Acceuil/>} exact/>
          <Route path='*' element={<div>404 - NOT FOUND</div>}/>

        </Routes>

      </div>
    </Router>

  );

}

export default App;

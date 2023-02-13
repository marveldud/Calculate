import Calculater from "./component/Calculater"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom';

function App() {
  return (
     <>
    <div>
    <Router>
        <Routes>
          <Route  path='/' element={<Calculater />}/> 
        </Routes>
   
        </Router>
    
    
    {/* <Footer/> */}
    </div>
    </>
  );
}

export default App;

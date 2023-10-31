
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Intro from './Pages/Intro/Intro';
import Home from './Pages/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Full from './Pages/Full/Full';
import Work from './Pages/Work/Work';
import Mymain from './Pages/Mymain/Mymain';
import Skill from './Pages/Skill/Skill';



function App() {
  return (
    <BrowserRouter basename='/Myportfolio'>
      
    <Routes>
    <Route path='full' element={<Full/>}/>
     <Route path='/' element={<Intro/>}/> 
     <Route path='home' element={<Home/>}/> 
     <Route path='work' element={<Work/>}/>
     <Route path='about' element={<Mymain/>}/>
     <Route path='skill' element={<Skill/>}/>
    </Routes>
    
    </BrowserRouter>
     
  );
}

export default App;

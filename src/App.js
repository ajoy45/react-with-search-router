
import './App.css';

import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import NotFound from './Components/NotFound/NotFound';
import Slider from './Components/Slider/Slider';

function App() {
  
  return (
    <div className='App'>
        <Header></Header>
        <Slider></Slider>
        <Routes>
                
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='about/:foodId' element={<About></About>}></Route>
                <Route path='contact' element={<Contact></Contact>}></Route>
                <Route path='*' element={<NotFound></NotFound>}></Route>
         </Routes>
    </div>
    
  );
}

export default App;


import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header/Header';
import Footer from './pages/Footer';
import Info from './info/Info';
import Login from './auth/Login';
import Register from './auth/Register';
import Home from './pages/Home';
import AvailableBus from './pages/AvailableBus';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route exact path='/' element={<Home/>}/>
    <Route exact path='/Available' element={<AvailableBus/>}/>
  
      
      <Route exact path='/Register' element={<Register/>}/>
      <Route exact path='/Login' element={<Login/>}/>
      
      
    </Routes>
    
  
    
    <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;

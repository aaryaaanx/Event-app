import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import AboutPage from './components/AboutPage';
import ServicePage from './components/ServicePage';
import ContactPage from './components/ContactPage';
import FAQPage from './components/FAQPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/"  element ={<Home/>}/>
      <Route path="/aboutus" element ={<AboutPage/>}/>
      <Route path="/service" element ={<ServicePage/>}/>
      <Route path="/contact" element ={<ContactPage/>}/>
      <Route path="/faq" element ={<FAQPage/>}/> 
    </Routes>
    </BrowserRouter>
  );
}

export default App;

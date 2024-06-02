import logo from './logo.svg';
import './App.css';
// import Background from './components/Background/Background';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './components/Home/Home';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Contact from './components/Contact/Contact';
import Portfolio from './components/Portfolio/Portfolio';
import Services from './components/Services/Services';
import Sidebar2 from './components/Sidebar/Sidebar2';
import About from './components/About/About';


function App() {
  return (
    <>
    <Router>
    <Sidebar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/portfolio' element={<Portfolio/>}></Route>
        <Route path='/services' element={<Services/>}></Route>
        <Route path='/about' element={<About/>}></Route>
      </Routes>
      <Sidebar2/>
    </Router>
    </>
  );
}

export default App;

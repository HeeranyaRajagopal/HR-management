import Footer from './components/Footer';
import Nav from './components/Nav';
import About from './Pages/About';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <Nav/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
     </Routes>
     <Footer/>
     </>
  
  );
}

export default App;

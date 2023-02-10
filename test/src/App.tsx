import './App.css';
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Home from "./page/Home";
import About from "./page/About";
import Input from './page/Input';
import Api from './page/Api';
import { Route,Routes } from "react-router-dom";

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={ <Home name="divyang" age="20"/>} />
      <Route path='/about' element={  <About name="Uttam Sir"/>} />
      <Route path='/input' element={   <Input />} />
      <Route path='/api' element={  < Api/>} />
    </Routes>
    <Footer/>
    </>
  );
}

export default App;

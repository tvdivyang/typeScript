import './App.css';
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Home from "./page/Home";
import About from "./page/About";

function App() {
  return (
    <>
    <Navbar />
    <Footer/>
    <Home title="Home" name="Devang"/>
    <About name="Uttam Sir"/>
    </>
  );
}

export default App;

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import {BrowserRouter as Router} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className='main-app-container'>
        <Navbar/>
        <div style={{height:'100vh'}}></div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;

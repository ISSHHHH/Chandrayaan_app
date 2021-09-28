import Navbar from './components/Navbar';
import {BrowserRouter as Router} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className='main-app-container'>
        <Navbar/>
      </div>
    </Router>
  );
}

export default App;

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Blogs from './components/Blogs/Blogs';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className='main-app-container'>
        <Navbar/>
        <Route path='/Blogs' component={Blogs}/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;

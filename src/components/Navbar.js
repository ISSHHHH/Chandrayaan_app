import {Link} from 'react-router-dom';
import {useLocation} from 'react-router';

const Navbar = () => {
    const location = useLocation();
    return (
            <div className='navbar-container'>
                <div className='navbar-logo'>
                    <Link className='navbar-logo-home' to='/'><h4 className='navbar-logo-heading'>Chandrayaan &nbsp;</h4> </Link>
                    <img className='navbar-logo-img' src='./images/diamond.png' alt='' />
                </div>
                <div className='navbar-content'>
                    <Link className={location.pathname==='/Blogs' ? 'navbar-link active':'navbar-link'} to='/Blogs'>blogs</Link>
                    <Link className={location.pathname==='/Chat' ? 'navbar-link active':'navbar-link'} to='/Chat'>chat</Link>
                    <Link className={location.pathname==='/About_us' ? 'navbar-link active':'navbar-link'} to='/About_us'>about us</Link>
                    <Link className={location.pathname==='/Contact' ? 'navbar-link active':'navbar-link'} to='/Contact'>contact</Link>
                    <Link className='Button-hollow' to='/Sign_in'>Sign In</Link>
                    <Link className='Button-fill' to='/Sign_up'>Sign Up</Link>
                </div>
            </div>

    )
}

export default Navbar

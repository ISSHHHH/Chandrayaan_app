import {Link} from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
    <footer>
  	 <div class="container">
  	 	<div class="row">
  	 		<div class="footer-col">
  	 			<h4>company</h4>
  	 			<ul>
  	 				<li><Link to='/About_us'>about us</Link></li>
  	 				<li><Link to='/services'>our services</Link></li>
  	 				<li><Link to='/policy'>privacy policy</Link></li>
  	 				<li><Link to='/'>affiliate program</Link></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>get help</h4>
  	 			<ul>
  	 				<li><Link to='/About_us'>about us</Link></li>
  	 				<li><Link to='/services'>our services</Link></li>
  	 				<li><Link to='/policy'>privacy policy</Link></li>
  	 				<li><Link to='/'>affiliate program</Link></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>online shop</h4>
  	 			<ul>
  	 				<li><Link to='/About_us'>about us</Link></li>
  	 				<li><Link to='/services'>our services</Link></li>
  	 				<li><Link to='/policy'>privacy policy</Link></li>
  	 				<li><Link to='/'>affiliate program</Link></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>follow us</h4>
  	 			<div class="social-links">
                    <Link to='/About_us'><i class="fab fa-facebook-f"></i></Link>
  	 				<Link to='/services'><i class="fab fa-twitter"></i></Link>
  	 				<Link to='/policy'><i class="fab fa-instagram"></i></Link>
  	 				<Link to='/'><i class="fab fa-linkedin-in"></i></Link>
  	
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
     <div className="footer-copy-end">
        <div className='navbar-logo navbar-logo-footer'>
            <Link className='navbar-logo-home navbar-logo-footer-link' to='/'><h4 className='navbar-logo-heading'>Chandrayaan &nbsp;</h4> </Link>
            <img className='navbar-logo-img' src='./images/diamond.png' alt='' />
        </div>
        <p style={{color:'#fff'}}>
            Copyright &copy; 2021
        </p>
     </div>
    </footer>
    )
}

export default Footer

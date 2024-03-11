import React from 'react'
import {Link} from 'react-router-dom';
import logo from '../images/brand.png';
import search from '../images/search.png';
import './Navbar.css';
import Avatar from '../components/Avatar/Avatar';


const Navbar = () => {

var User = null

  return (
    <nav className='main-nav'>
    <div className='navbar'>
        <Link to = '/' className="nav-logo nav-btn">
        <img src={logo} alt='logo'></img>
        </Link>
        <Link to = '/' className="nav-item nav-btn">About</Link>
        <Link to = '/' className="nav-item nav-btn">Products</Link>
        <Link to = '/' className="nav-item nav-btn">For Teams</Link>
        
        <form>
            <input type="text" className="nav-item nav-btn" placeholder='Search here.....' />
            <img src={search} alt="search" width="18px" className='search-icon'/>
        </form>

        { User === null ?
          <Link to='/Auth' className='nav-item nav-links'>Log in</Link> :
          <>
          <Avatar backgroundColor="#009dff" padding="5px 12px" borderRadius="50%" color="white"><Link to='/User' style={{color:'white', textDecoration:'none'}}>L</Link></Avatar>
          <button className='nav-item nav-links'>Logout</button>
          
          </>  
      
      
      }

      
    </div>
  </nav>
  )
}

export default Navbar

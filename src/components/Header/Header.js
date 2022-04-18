import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import CustomLink from '../CustomLink/CustomLink';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
const Header = () => {

  const [user] = useAuthState(auth);
  
  const handleSignOut = () =>{
    signOut(auth);
  }

  return (
    <header>
      <nav className="navigation">
        <img src={logo} alt="" />

        <div className="nav-menu">
          <CustomLink className="nav-link" to="/shop">
            Shop
          </CustomLink>
          <CustomLink className="nav-link" to="/orders">
            Orders
          </CustomLink>
          <CustomLink className="nav-link" to="/inventory">
            Inventory
          </CustomLink>
          <CustomLink className="nav-link" to="/about">
            About
          </CustomLink>
          {
            user ? <button 
            onClick={handleSignOut}
            style={{outline:'none', border:'none', background:'transparent', color:'white', fontSize:'1rem', textTransform:'capitalize', fontWeight:'500'}}
            className='nav-link'>sign out</button> : <CustomLink className='nav-link' to='/login'>Login</CustomLink>
          }
         
        </div>
      </nav>
    </header>
  );
};

export default Header;

// frontend/src/components/Navigation/index.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <NavLink className='navlink' to="/login">Log In</NavLink>
        <NavLink className='navlink' to="/signup">Sign Up</NavLink>
        <NavLink className='navlink' to="/chairs">Chairs</NavLink>
      </>
    );
  }

  return (
    <div>

    <ul>
      <ul>
        <NavLink className='navlinkHOME' exact to="/">Home</NavLink>
        {isLoaded && sessionLinks}
      </ul>

    </ul></div>
  );
}

export default Navigation;

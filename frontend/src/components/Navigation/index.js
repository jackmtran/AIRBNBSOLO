// frontend/src/components/Navigation/index.js
import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);
  const history = useHistory();


  const forHoverHOME = (e) => {
    e.preventDefault();
    history.push('/')
  }
  const forHoverLOGIN = (e) => {
    e.preventDefault();
    history.push('/login')
  }
  const forHoverSIGNUP = (e) => {
    e.preventDefault();
    history.push('/signup')
  }
  const forHoverCHAIRS = (e) => {
    e.preventDefault();
    history.push('/chairs')
  }



  // const forHoverCreate = (e) => {
  //   e.preventDefault();
  //   history.push('/create')
  // }

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <button type="button" className='button' onClick={forHoverLOGIN}> Log In</button>
        <button type="button" className='button' onClick={forHoverSIGNUP}> Sign Up</button>
        <button type="button" className='button' onClick={forHoverCHAIRS}> Chairs</button>
      </>
    );
  }

  return (
    <div>

    <ul>
      <ul>
      <button type="button" className='button' onClick={forHoverHOME}> HOME </button>
        {isLoaded && sessionLinks}
      </ul>

    </ul></div>
  );
}

export default Navigation;

// frontend/src/components/Navigation/ProfileButton.js
import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import { NavLink, useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom";


function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    history.push('/home')
  };

  return (
    <div className="rightnav">

      <button className='chairbutt' onClick={openMenu}>
        <i className="fa-solid fa-chair"></i>
      </button>
       <NavLink className='navlink' to="/chairs">Chairs</NavLink>
      <NavLink className='navlink' to="/create">Create a Listing</NavLink>
      {showMenu && (
        <ul className="profile-dropdown">
          <ul>Welcome {user.username}!</ul>
          <ul>Account Email:{user.email}</ul>
          <ul>
            <button onClick={logout}>Log Out</button>
          </ul>
        </ul>
      )}

    </div>
  );
}

export default ProfileButton;

import React from 'react'
import { useState } from 'react';
import MenuPopUp from './MenuPopUp';
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  console.log(user);
  
  const HandleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }
  const HandleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate('/')
      })
      .catch((error) => {
        // An error happened.
        navigate('/error')
      });
  }

  return (
    <div className="absolute  z-10 grid grid-cols-12 w-screen bg-gradient-to-b from-black">
      <div className="col-span-6">
        <img
          className="w-48"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt=""
        />
      </div>
      {user &&
        <div className="col-span-5 grid justify-items-end grid-cols-12">
          <img
            className=" mt-4 w-10 h-10 rounded-lg border-white border-2 col-span-10"
            src={user?.photoURL}
            alt="Error"
          />
          {console.log(user?.PhotoURL)}
          {isMenuOpen && <button className=" text-white col-span-1 mr-4" onClick={() => { HandleMenu() }}>▼{<MenuPopUp />}</button>}
          {!isMenuOpen && <button className=" text-white col-span-1 mr-4" onClick={() => { HandleMenu() }}>▲</button>}
          <button className="text-white col-span-1 font-bold" onClick={() => { HandleSignOut() }}>SignOut</button>
        </div>
      }
    </div>
  );
}

export default Header

import React,{useEffect} from 'react'
import { useState } from 'react';
import MenuPopUp from './MenuPopUp';
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Netlix_Logo } from '../utils/constants';
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const user = useSelector(store => store.user); 
    // console.log(user);
  const dispatch = useDispatch();
  
  useEffect(() => {
  //this on auth sate change function inside useeffect tells info about user if present every time the signin and signout button function in header is used
  const unsubscibe=onAuthStateChanged(auth, (user) => {
    if (user) {
      //user is signed in // got this template from firebase authentication->web->manage users
      const { uid, email, displayName, photoURL } = user;
      dispatch(
        addUser({
          uid: uid,
          email: email,
          displayName: displayName,
          photoURL: photoURL,
        })
      );
      navigate('/browse');
    } else {
      // User is signed out
      dispatch(removeUser());
      navigate("/");
    }
    
  });
    return ()=> unsubscibe();
}, []);

  const HandleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  const HandleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate('/error')
      });
  }

  return (
    <div className="absolute z-20 grid grid-cols-12 w-screen bg-gradient-to-b from-black">
      <div className="col-span-6">
        <img
          className="w-48 "
          src={Netlix_Logo}
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
          {/* {console.log(user?.PhotoURL)} */}
          {isMenuOpen && <button className=" text-white col-span-1 mr-4" onClick={() => { HandleMenu() }}>▼{<MenuPopUp />}</button>}
          {!isMenuOpen && <button className=" text-white col-span-1 mr-4" onClick={() => { HandleMenu() }}>▲</button>}
          <button className="text-white col-span-1 font-bold" onClick={() => { HandleSignOut() }}>SignOut</button>
        </div>
      }
    </div>
  );
}

export default Header

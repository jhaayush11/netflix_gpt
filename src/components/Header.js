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
import { toggleGPTSearchView } from '../utils/gptSlice';
import { Supported_Language } from '../utils/LanguageConstants';
import { toggleLanguage } from '../utils/configSlice';
import { lang } from '../utils/LanguageConstants';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const user = useSelector(store => store.user); 
  const gptPageOpen = useSelector(store => store.gpt.showGptPage);
  const curr_lang = useSelector(store => store.config.lang);
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
  
  const HandleGptSearch = () => {
    // e.preventDefault();
    dispatch(toggleGPTSearchView());
  }
  const HandleLangChange = (e) => {
    dispatch(toggleLanguage(e?.target?.value));
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
      {user && <div className='col-span-3 flex justify-center'>
        {gptPageOpen && <div div className='mt-4 p-2 h-10 rounded-l-full bg-purple-800 font-bold text-white'>Language/भाषा</div>}
         {gptPageOpen && <select
            name="Language/भाषा" id=""
            className='bg-purple-800 text-white w-4 h-10 mt-4 p-2 rounded-r-full'
            onChange={HandleLangChange}
        >
            {Supported_Language.map((lan) => <option value={lan.identifier} >{lan.name}</option>)}
        </select>}
      </div>}
      {user &&
        <div className="col-span-3 grid grid-cols-12 ">
          <button
            onClick={() => { HandleGptSearch() }}
            className="font-bold text-white bg-purple-800 col-span-6 rounded-full mt-4 h-10 mr-6 w-3/4">
            {gptPageOpen ? "Home":'GPT Search'}
          </button>
          
          <img
            className=" mt-4 w-10 h-10 rounded-lg border-white border-2 col-span-2"
            src={user?.photoURL}
            alt="Error"
          />
          {isMenuOpen && <button className=" text-white col-span-1 mr-1" onClick={() => { HandleMenu() }}>▼{<MenuPopUp />}</button>}
          {!isMenuOpen && <button className=" text-white col-span-1 mr-1" onClick={() => { HandleMenu() }}>▲</button>}
          <button className="text-white  font-bold" onClick={() => { HandleSignOut() }}>SignOut</button>
        </div>
      }
    </div>
  );
}

export default Header

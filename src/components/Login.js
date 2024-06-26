import React, { useRef } from 'react'
import Header from './Header'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { checkValidation } from '../utils/validate';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';
import { updateProfile } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { Avatar_URL, Background_Image } from '../utils/constants';

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const dispatch = useDispatch();

  const SignInHandler = () => {
    setIsSignIn( !isSignIn);
  }

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  
  const handleSubmit=() => {
    const message = checkValidation(name?.current?.value, email.current.value, password.current.value);
    setErrorMsg(message);

    if (message ) return;

    //signUp logic
    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: Avatar_URL,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              // Profile updated!
            })
            .catch((error) => {
              setErrorMsg(error.message);
            });
  
        })
        .catch((error) => {
          // const errorCode = error.code;
          // const errorMessage = error.message;
          // console.log(errorMessage);
          setErrorMsg('An account already registered with these credentials');
          // ..
        });
    }
    //signIn logic
    else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          // const user = userCredential.user;
          // console.log(user);
          // ...
        })
        .catch((error) => {
          // const errorCode = error.code;
          // const errorMessage = error.message;
          // console.log(errorMessage);
          setErrorMsg( 'Invalid Credentials');
        });
    }
  }
  
  return (
    <div className="">
      < Header />
      <div className="absolute">
        <img
          className=""
          src={Background_Image}
          alt="logo"
        />
      </div>
      <form
        className="absolute p-12 bg-black w-3/12 my-24 mx-auto left-0 right-0 text-white rounded-lg bg-opacity-70"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="text-3xl ">{isSignIn ? "Sign In" : "Sign Up"}</div>
        {!isSignIn && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-2 my-4 w-full bg-black border-[1px] "
          />
        )}
        
        <input
          ref={email}
          type="text"
          placeholder="Email or Phone Number"
          className="p-2 my-4 w-full bg-black border-[1px] "
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 my-4 w-full bg-black border-[1px]"
        />
        <p className='text-red font-semibold text-red-500'>{errorMsg}</p>
        <button
          className="bg-red-600  p-2 my-4 w-full rounded-lg"
          onClick={() => {
            handleSubmit();
          }}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>

        {isSignIn ? (
          <div className="m-2 font-thin">
            {" "}
            Already a User &nbsp;
            <Link
              className="font-bold hover:underline"
              onClick={() => {
                SignInHandler();
              }}
            >
              Sign Up Now
            </Link>
          </div>
        ) : (
          <div className="m-2 font-thin">
            {" "}
            New to Netflix? &nbsp;
            <Link
              className="font-bold hover:underline"
              onClick={() => {
                SignInHandler();
              }}
            >
              Sign In Now
            </Link>
          </div>
        )}
      </form>
    </div>
  );
}

export default Login

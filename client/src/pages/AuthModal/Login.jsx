import React from 'react';
import './Login.css'
import { GiFeatheredWing } from "react-icons/gi";
import Granim from "granim";

const Login = () => {
  return (
    <div className='mainn'>
      <div className='logo-holder'>
      <div className='logo'>
      <GiFeatheredWing />
      </div>
      </div>
        <div className='login'>
          <p className="login1">HackTU</p>
          <p>LOG IN</p>
        </div>
    </div>
  )
}

export default Login

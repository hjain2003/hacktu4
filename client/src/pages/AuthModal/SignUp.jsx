import React,{useState} from 'react';
import './SignUp.css'
import { GiFeatheredWing } from "react-icons/gi";
import Granim from "granim";


export const SignUp = () => {
    const [login, setLogin] = useState(true);

    const handleClick= ()=>{
        setLogin(!login);
    }

  return (
    <div className='mainn'>
      <div className='logo-holder'>
      <div className='logo'>
      <GiFeatheredWing />
      </div>
      </div>
        <div className='login'>
          <p className="login1">HackTU</p>
          <p>SIGN UP</p>
        </div>
    </div>
  )
}
export default SignUp
import React from 'react'
import './LoginForm.css';

export const Form = () => {

  const submit=()=>{
    alert('Logged In!');
  }


  return (
    <form>
        <input type="Text" className="input" placeholder="Username"/>
        <input type={'password'} className="input" placeholder='Password' />

        <div className='checkbox'>
            <input type='checkbox' id="check" />
            <label htmlFor='check'>Keep me signed in</label>
        </div>

        <div className='loginbut'>
        <input type="submit" className='loginn' onClick={submit} value="LOG IN"/>
            <p>Forgot Password | <span>Sign Up</span></p>
        </div>
    </form>
  )
}

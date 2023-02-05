import React, {useState} from 'react'
import './SignForm.css';

export const SignForm = () => {
 const regex= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const [email, setEmail] =useState('');
  const [error, setError] = useState('');

  const checkEmail = (e) =>{
    setEmail(e.target.value);

    if(regex.test(email)== false){
      setError('*please enter valid email address');
    }else{
      setError('');
      return true;
    }
  }

  const submit=()=>{
    alert('account created');
  }

  return (
    <form>
        <input type="Text" className="input" placeholder="Full Name"/>
        <input type="Text" className="input" placeholder="Username"/>
        <input type="text" className="input" placeholder="Mail id" onChange={checkEmail}/>
        <p className='text-danger'>{error}</p>
        <input type={'password'} className="input" placeholder='Password' />

        <div className='checkbox'>
            <input type='checkbox' id="check" />
            <label htmlFor='check'>Keep me signed in</label>
        </div>
        <div className='loginbut'>
        <input type="submit" className='loginn' onClick={submit} value="SIGN UP"/>
            <p>Forgot Password | Already have an account? <span>Log In</span></p>
        </div>
    </form>
  )
}

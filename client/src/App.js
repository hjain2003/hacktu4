import './App.css';
import './pages/Home/Home'
import Home from './pages/Home/Home';
import Card from './components/Card/Card';
import Login from './pages/AuthModal/Login';
import SignUp from './pages/AuthModal/SignUp';
import { Form } from './components/LoginForm/LoginForm';
import { SignForm } from './components/SignUpForm/SignForm'

function App() {
  return (
    <>
<<<<<<< HEAD
    <Home/>
=======
    {/* <SignUp />
    <SignForm /> */}
    <Login/>
    <Form />
    {/* <Home/>
    <br />
    <Card/> */}
>>>>>>> d5a802f712ff707225c31c7032ad2e8cb769d0f5
    </>
  );
}

export default App;
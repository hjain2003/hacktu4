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
    {/* <SignUp />
    <SignForm /> */}
    <Login/>
    <Form />
    {/* <Home/>
    <br />
    <Card/> */}
    </>
  );
}

export default App;
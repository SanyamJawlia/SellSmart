import React, { useEffect, useState } from 'react'
import "../../Styles/login.scss"
import { useDispatch, useSelector } from 'react-redux';
import { LoginAction } from '../../Action/UserAction';
import { MdEmail } from "react-icons/md"
import { RiLockPasswordFill } from "react-icons/ri"
import {} from "react-icons/ri"
import { Link, useNavigate } from 'react-router-dom';
import { useAlert } from 'react-alert';

const Login = () => {

    const dispatch = useDispatch();
    const alert = useAlert();
    const navigate = useNavigate();

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("")

    const {error,isAuthenticated} = useSelector(state=>state.user);

    const loginHandler = (e)=>{
        e.preventDefault();

        dispatch(LoginAction(email,password));
        alert.success("Logged in Successfully");
        navigate("/");
    }

    useEffect(() => {
      if (error) {
        alert.error(error);
        dispatch({type:"clearError"});
      }
  
    }, [dispatch, error, isAuthenticated,alert]);  

  return (
    <div id="login" >
      <div className="logincontainer">
        <h2>Login</h2>
          <form onSubmit={loginHandler} >

          <div>
            <RiLockPasswordFill/>
            <input type="email" placeholder="Your Email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
          </div>

          <div>
            <MdEmail/>
            <input type="password" placeholder="Your Password" value={password} onChange={(e)=>setPassword(e.target.value)} required/>
          </div>

          <button type="submit" >Login</button>

          <h3>Don't have an Account?</h3>
          <button type="submit" ><Link to="/register" >Register</Link></button>

          <Link to="/forgotPassword">Forgot Password?</Link>
        </form>
      </div>

    </div>
  )
}

export default Login

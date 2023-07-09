import React, { useEffect, useState } from 'react'
import "../../Styles/register.scss"
import { RegisterAction } from '../../Action/UserAction';
import { useDispatch, useSelector } from 'react-redux';
import { useAlert } from 'react-alert';
import { MdEmail } from "react-icons/md"
import { RiLockPasswordFill } from "react-icons/ri"
import {} from "react-icons/ri"
import { BiSolidUser } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import img from "../../Images/Profile.png";
import {useNavigate} from "react-router-dom"

const Register = () => {

    const dispatch = useDispatch();
    const alert = useAlert();
    const navigate = useNavigate();

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("")
    const [avatar,setAvatar] = useState()
    const [avatarPreview,setAvatarPreview]=useState(img)

    const {error,isAuthenticated} = useSelector((state)=>state.user)

    const registerHandler = (e)=>{
        e.preventDefault();

        const myForm = new FormData();

        myForm.set("name", name);
        myForm.set("email", email);
        myForm.set("password", password);
        myForm.append("avatar", avatar);

        dispatch(RegisterAction(myForm));
        alert.success("Registered Successfully")
        navigate("/")
    }

    const registerDataChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
  
        reader.readAsDataURL(file);
        reader.onload = () => {
          if (reader.readyState === 2) {
            setAvatarPreview(reader.result);
            setAvatar(reader.result);
          }
        };
    };

    useEffect(() => {
      if(error){
        alert.error(error);
        dispatch({type:"clearError"})
      }
      if(isAuthenticated){
        alert.success("You are Registered");
        dispatch({type:"clearMessage"})
        
      }
    }, [dispatch,error,alert,isAuthenticated])
    

  return (
    <div id="register" >
      <div className="registerContainer">
        <h2>Register</h2>
          <form onSubmit={registerHandler} encType="multipart/form-data" >

          <div id="registerImage">
            <img src={avatarPreview} alt="Avatar Preview" />
            <input type="file" name="avatar" accept="image/*" onChange={registerDataChange} required />
          </div>

          <div>
            <BiSolidUser/>
            <input type="text" placeholder="Your Name" value={name} onChange={(e)=>setName(e.target.value)} required />
          </div>

          <div>
            <RiLockPasswordFill/>
            <input type="email" placeholder="Your Email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
          </div>

          <div>
            <MdEmail/>
            <input type="password" placeholder="Your Password" value={password} onChange={(e)=>setPassword(e.target.value)} required/>
          </div>


          <button type="submit" >Register</button>

          <h3>Already have an Account?</h3>
          <button type="submit" ><Link to="/login" >Login</Link></button>

          <Link to="/forgotPassword">Forgot Password?</Link>
        </form>
      </div>

    </div>
  )
}

export default Register

import React from 'react'
import "../../Styles/profile.scss"
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../Essentials/Loader';
import { useAlert } from 'react-alert';
import { Link, useNavigate } from 'react-router-dom';
import { LogoutAction } from '../../Action/UserAction';



const Profile = () => {

    const dispatch = useDispatch();
    const alert = useAlert();
    const navigate = useNavigate();

    const {user,loading} = useSelector(state=>state.user);
    
    if(!user){
        return null;
    }

    const LogoutHandler = ()=>{
      
      dispatch(LogoutAction());
      alert.success("Logged Out");
      navigate("/login")
    }


  return loading ? <Loader/> : (
    <div id="profile">
      <div className="leftprofile">
        <img src={user.avatar.url} alt={user.name} />
        {/* <button>Edit Profile</button> */}
      </div>
      <div className="rightprofile">
          <h1>Profile</h1>
        <div>
          <h3>Name:</h3>
          <p>{user.name}</p>
        </div>
        <div id="userid">
          <h3>User Id:</h3>
          <p>{user._id}</p>
        </div>
        <div>
          <h3>Email:</h3>
          <p>{user.email}</p>
        </div>
        <div>
          <h3>Role:</h3>
          <p>{user.role}</p>
        </div>
        <section className="btn">
          <button><Link to="/updateProfile" >Edit Profile</Link></button>
          <button><Link to="/resetPassword" >Reset Password</Link></button>
          <button onClick={LogoutHandler} >Logout</button>
        </section>
          
      </div>
    </div>


  )
}

export default Profile

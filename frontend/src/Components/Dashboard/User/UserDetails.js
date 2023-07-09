import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom';
import { SingleUserDetailsAdminAction } from '../../../Action/UserAction';
import Loader from '../../Essentials/Loader';
import "../../../Styles/userDetails.scss"

const UserDetails = () => {
    const dispatch = useDispatch();
    const {id} = useParams();

    const {userSingle:item,loading} = useSelector((state)=>state.singleUser)


    useEffect(() => {
        dispatch(SingleUserDetailsAdminAction(id));
      }, [dispatch])
  
      if(!item){
          return null;
      }
  

  return ( loading ? <Loader/> : 
    <div id="userDetailsAdmin" >
      <div className="leftprofile">
        <img src={item.avatar.url} alt={item.name} />
      </div>
      <div className="rightprofile">
          <h1>Details</h1>
        <div>
          <h3>Name:</h3>
          <p>{item.name}</p>
        </div>
        <div id="userid">
          <h3>User Id:</h3>
          <p>{item._id}</p>
        </div>
        <div>
          <h3>Email:</h3>
          <p>{item.email}</p>
        </div>
        <div>
          <h3>Role:</h3>
          <p>{item.role}</p>
        </div>
        <section className="btn">
          <button><Link to={`/updateRole/${item._id}`} >Update Role</Link></button>
        </section>
          
      </div>
    </div>
  )
}

export default UserDetails

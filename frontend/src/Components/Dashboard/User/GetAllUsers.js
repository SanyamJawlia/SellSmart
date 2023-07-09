import React, { useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux";
import { useAlert } from 'react-alert';
import { GetAllUserAction } from '../../../Action/UserAction';
import Loader from '../../Essentials/Loader';
import { Link } from 'react-router-dom';
import "../../../Styles/getAllUsers.scss"
import DashboardMenu from '../DashboardMenu';

const GetAllUsers = () => {

  const dispatch = useDispatch();
  const alert = useAlert();

  const {users,loading} = useSelector((state)=>state.allUsers);

  useEffect(() => {
    dispatch(GetAllUserAction());
    alert.success("all users are found")
  }, [dispatch])

  return (
    <div id="getAllUsers" >
      <DashboardMenu/>
      <h2>SellSmart: Users</h2>
      <div className="container">
        <div className="usercardheader">
          <h2>Image</h2>
          <h2>Name</h2>
          <h2>Role</h2>
        </div>
        {
            loading ? <Loader/> : users && users.map((item)=>(
              <UserCard
                key={item._id}
                name = {item.name}
                id={item._id}
                image = {item.avatar.url}
                role={item.role}
              />
            ))
        }
      </div>

    </div>
  )
}

const UserCard = ({name,id,image,role})=>(
  <div className="usercard" style={{minheight:"100px"}}>
  <Link to={`/user/${id}`} >
    <img src={image} alt={"Photo"} />
    <h2>{name}</h2>
    <h3 style={{color : role==="admin" ?"gold": "blue"}} >{role}</h3>
  </Link>
  </div>
)

export default GetAllUsers

import React, { useState } from 'react'
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { updateUserRoleAction } from '../../../Action/UserAction';
import "../../../Styles/updateUserRole.scss"

const UpdateUserRole = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const alert = useAlert();
    const {id} = useParams();

    const [role,setRole] = useState("");
    
    const submitHandler = (e)=>{
        e.preventDefault();

        const myForm =new FormData();
        myForm.set("role",role.toLowerCase());
         dispatch(updateUserRoleAction(id,myForm));
        alert.success("Role Updated");
    }

  return (
    <div id="updateUserRole" >
        <h2>Update Role</h2>
      <form onSubmit={submitHandler}>
            <input type="text" placeholder="Update Role Here..." required name="role" value={role} onChange={(e) => setRole(e.target.value)}/>

            <input type="submit" value="Update" className="updateUserRole" />
      </form>
        

    </div>
  )
}

export default UpdateUserRole

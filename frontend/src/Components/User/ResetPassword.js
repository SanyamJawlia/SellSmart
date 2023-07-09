import React, { useEffect, useState } from "react";
import { RiLockPasswordFill, RiLockPasswordLine } from "react-icons/ri";
import { BsDatabaseLock } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import "../../Styles/resetPassword.scss"
import { LoadUserAction, ResetPasswordAction } from "../../Action/UserAction";
import Loader from "../Essentials/Loader";
import { useAlert } from "react-alert";

const ResetPassword = () => {

  const dispatch = useDispatch();
  const alert = useAlert();

  // const {user} = useSelector(state=>state.user)
  const {isUpdated,error,loading} = useSelector(state=>state.profile)

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setnewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const ResetPasswordSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("oldPassword", oldPassword);
    myForm.set("newPassword", newPassword);
    myForm.set("confirmPassword", confirmPassword);

    dispatch(ResetPasswordAction(myForm));
  };

  useEffect(() => {

    if(error){
      alert.error(error);
      dispatch({type:"ClearError"})
    }

    if(isUpdated){
      dispatch(LoadUserAction());
      alert.success("Password Updated Successfully")

      dispatch({type:"ResetPasswordReset"})
    }
  }, [error,dispatch,alert,isUpdated])



  return loading ? <Loader/> : (
    <div id="resetPassword">
      <div className="resetPasswordBox">
        <h2>Reset Password</h2>

        <form  className="ResetPasswordForm" encType="multipart/form-data" onSubmit={ResetPasswordSubmit} >

          <div>
            <BsDatabaseLock />
            <input type="password" placeholder="Old Password" required name="oldPassword" value={oldPassword} onChange={(e) => setOldPassword(e.target.value)}/>
          </div>

          <div>
            <RiLockPasswordLine />
            <input type="password" placeholder="New Password" required name="newPassword" value={newPassword} onChange={(e) => setnewPassword(e.target.value)}/>
          </div>

          <div>
            <RiLockPasswordFill />
            <input type="password" placeholder="Confirm Password" required name="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
          </div>

          <input type="submit" value="Update" className="ResetPasswordBtn" />
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;

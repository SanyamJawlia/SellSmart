import React, { useEffect, useState } from "react";
import { BiSolidUser } from "react-icons/bi";
import { IoMdMail } from "react-icons/io";
import img from "../../Images/Profile.png"
import { useDispatch, useSelector } from "react-redux";
import "../../Styles/updateProfile.scss"
import { LoadUserAction, updateProfileAction } from "../../Action/UserAction";
import { useAlert } from "react-alert";
import Loader from "../Essentials/Loader";

const UpdateProfile = () => {

  const dispatch = useDispatch();
  const alert = useAlert();

  const {user} = useSelector(state=>state.user)
  const {isUpdated,error,loading} = useSelector(state=>state.profile)

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState();
  const [avatarPreview, setAvatarPreview] = useState(img);

  const updateProfileSubmit = async(e) => {
    e.preventDefault();
    console.log(name,email,avatar,avatarPreview)
    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("email", email);
    myForm.append("avatar", avatar);
    await dispatch(updateProfileAction(myForm));
    alert.success("Profile Updated");
  };

  const updateProfileDataChange = (e) => {
    const reader = new FileReader();

    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      if (reader.readyState === 2) {
        setAvatarPreview(reader.result);
        setAvatar(reader.result);
      }
    };

  };

  useEffect(() => {
    if(user){
      setName(user.name);
      setEmail(user.email)
      setAvatarPreview(user.avatar.url)
    }

    if(error){
      alert.error(error);
      dispatch({type:"ClearError"})
    }

    if(isUpdated){
      dispatch(LoadUserAction());
      dispatch({type:"UpdateProfileReset"})

    }
  }, [user,error,isUpdated,dispatch,alert])
  

  return loading ? (<Loader/>) : (
    <div id="updateProfileContainer">
      <div className="imageArea">
        <img src={avatarPreview} alt="Avatar Preview" />
      </div>
      <div className="updateProfileBox">
        <h2>Update Profile</h2>

        <form  className="updateProfileForm" encType="multipart/form-data" onSubmit={updateProfileSubmit} >

          <div>
            <BiSolidUser />
            <input type="text" placeholder="Name" required name="name" value={name} onChange={(e) => setName(e.target.value)}/>
          </div>

          <div>
            <IoMdMail />
            <input type="email" placeholder="Email" required name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
          </div>

          <section>
            <input type="file" name="avatar" accept="image/*" onChange={updateProfileDataChange} />
          </section>

          <input type="submit" value="Update" className="updateProfileBtn" />
        </form>
      </div>
    </div>
  );

};

export default UpdateProfile;

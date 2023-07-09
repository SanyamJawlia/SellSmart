import React, { useState } from 'react'
import "../../Styles/header.scss";
import {Link, useNavigate} from "react-router-dom";
import {BiUserCircle,} from "react-icons/bi";
import {AiOutlineSearch, AiOutlineShoppingCart} from "react-icons/ai";
import { FaShoppingCart} from "react-icons/fa";
import { BiSolidUserCircle} from "react-icons/bi";
import logo from "../../Images/logo.png"
import TemporaryDrawer from "../Essentials/TemporaryDrawer";
import { useSelector } from 'react-redux';

const Header = ({}) => {

  const navigate = useNavigate();

  const {user} = useSelector(state=>state.user);

  const [tag,setTag] = useState(window.location.pathname)

  const [keyword,setKeyword] = useState("")

  const searchSubmitHandler=(e)=>{
    e.preventDefault();
    navigate("/product")
    
  }

  return (
    <>
      <section id="search">

        <img src={logo} alt="LogoImage"  />

        <form className="searchbar" onSubmit={searchSubmitHandler}>
          <input type="text" placeholder='Search Product...' onChange={(e)=>setKeyword(e.target.value)} />
          <button type="submit" value="search" ><AiOutlineSearch/></button>
        </form>
        
        <Link to="/dashboard" >Dashboard</Link>

      </section>

      <section className="navbar">
        <div className="searchbar">
          <input type="text" placeholder='Search Product...' />
          <button><AiOutlineSearch/></button>
        </div>
        <nav>
          <Link to={"/"} onClick={()=>setTag("/")}>
              { tag==="/" ? <div style={{color:'#006400' , borderBottom:'2px solid #006400'}}>Home</div>  : <div>Home</div>}
          </Link>
          <Link to={"/product"} onClick={()=>setTag("/product")}>
              { tag==="/product" ? <div style={{color:'#006400' , borderBottom:'2px solid #006400'}}>Product</div>  : <div>Product</div>}
          </Link>
          <Link to={"/blogs"} onClick={()=>setTag("/blogs")}>
              { tag==="/blogs" ? <div style={{color:'#006400' , borderBottom:'2px solid #006400'}}>Blogs</div>  : <div>Blogs</div>}
          </Link>
          <Link to={"/myOrder"} onClick={()=>setTag("/myOrder")}>
              { tag==="/myOrder" ? <div style={{color:'#006400' , borderBottom:'2px solid #006400'}}>My Orders</div>  : <div>My Orders</div>}
          </Link>
          <Link to={"/contact"} onClick={()=>setTag("/contact")}>
              { tag==="/contact" ? <div style={{color:'#006400' , borderBottom:'2px solid #006400'}}>Contacts</div>  : <div>Contacts</div>}
          </Link>
        </nav>

        <div className="profile">
          <Link to={"/cart"} onClick={()=>setTag("/cart")}>
              { tag==="/cart" ? <FaShoppingCart color={"#006400"} />   : <AiOutlineShoppingCart/>}
          </Link>
          <Link to={"/profile"} onClick={()=>setTag("/profile")}>
              { tag==="/profile" ?  <BiSolidUserCircle color={"#006400"} /> : <BiUserCircle/>}
          </Link>
          <TemporaryDrawer/>
        </div>
      </section>
    </>
  )
}

export default Header;

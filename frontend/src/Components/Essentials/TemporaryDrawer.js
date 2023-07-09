import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { BiUserCircle } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import logo from "../../Images/logo.png"
import { RiProductHuntLine } from "react-icons/ri"
import { FaMicroblog, FaRegGem } from "react-icons/fa"
import { MdOutlineContactMail, MdOutlineSecurity, MdUpdate } from "react-icons/md"
import { TbShip } from "react-icons/tb"
import { LiaShippingFastSolid } from "react-icons/lia"
import {  AiOutlineHome, AiOutlineLogin, AiOutlineLogout, AiOutlineMenu, AiOutlineShoppingCart } from 'react-icons/ai';

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({right: false,});

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>

          <Link to="/">
            <img src={logo} alt="logo" width={"200px"} />
          </Link>
          
          <Link to="/" style={{ textDecoration: 'none', color: '#006400' }}>
          <ListItem disablePadding >
            <ListItemButton sx={{ ':hover': { backgroundColor: '#c7f9cc' } }} >
              <ListItemIcon> <AiOutlineHome color={"#006400"} size={"1.75rem"} /> </ListItemIcon>
              <ListItemText primary={"Home"} />
            </ListItemButton>
          </ListItem></Link>
          
          <Link to="/product" style={{ textDecoration: 'none', color: '#006400' }}>
          <ListItem disablePadding >
            <ListItemButton sx={{ ':hover': { backgroundColor: '#c7f9cc' } }} >
              <ListItemIcon> <RiProductHuntLine color={"#006400"} size={"1.75rem"} /> </ListItemIcon>
              <ListItemText primary={"Products"} />
            </ListItemButton>
          </ListItem></Link>
          
          <Link to="/product" style={{ textDecoration: 'none', color: '#006400' }}>
          <ListItem disablePadding >
            <ListItemButton sx={{ ':hover': { backgroundColor: '#c7f9cc' } }} >
              <ListItemIcon> <FaMicroblog color={"#006400"} size={"1.75rem"} /> </ListItemIcon>
              <ListItemText primary={"Blogs"} />
            </ListItemButton>
          </ListItem></Link>
          <Link to="/myOrder" style={{ textDecoration: 'none', color: '#006400' }}>
          <ListItem disablePadding >
            <ListItemButton sx={{ ':hover': { backgroundColor: '#c7f9cc' } }} >
              <ListItemIcon> <LiaShippingFastSolid color={"#006400"} size={"1.75rem"} /> </ListItemIcon>
              <ListItemText primary={"My Orders"} />
            </ListItemButton>
          </ListItem></Link>
          
          <Link to="/contact" style={{ textDecoration: 'none', color: '#006400' }}>
          <ListItem disablePadding >
            <ListItemButton sx={{ ':hover': { backgroundColor: '#c7f9cc' } }} >
              <ListItemIcon> <MdOutlineContactMail color={"#006400"} size={"1.75rem"} /> </ListItemIcon>
              <ListItemText primary={"Contact Us"} />
            </ListItemButton>
          </ListItem></Link>
          
          <Link to="/cart" style={{ textDecoration: 'none', color: '#006400' }}>
          <ListItem disablePadding >
            <ListItemButton sx={{ ':hover': { backgroundColor: '#c7f9cc' } }} >
              <ListItemIcon> <AiOutlineShoppingCart color={"#006400"} size={"1.75rem"} /> </ListItemIcon>
              <ListItemText primary={"Shopping Cart"} />
            </ListItemButton>
          </ListItem></Link>
          
          <Link to="/shippingInfo" style={{ textDecoration: 'none', color: '#006400' }}>
          <ListItem disablePadding >
            <ListItemButton sx={{ ':hover': { backgroundColor: '#c7f9cc' } }} >
              <ListItemIcon> <TbShip color={"#006400"} size={"1.75rem"} /> </ListItemIcon>
              <ListItemText primary={"Place Order"} />
            </ListItemButton>
          </ListItem></Link>
          

      </List>
      <Divider />
      <List>
      
          <Link to="/profile" style={{ textDecoration: 'none',color: '#006400' }}>
          <ListItem disablePadding >
            <ListItemButton sx={{ ':hover': { backgroundColor: '#c7f9cc' } }} >
              <ListItemIcon> <BiUserCircle color={"#006400"} size={"1.75rem"} /> </ListItemIcon>
              <ListItemText primary={"Profile"} />
            </ListItemButton>
          </ListItem></Link>
      
          <Link to="/profile" style={{ textDecoration: 'none',color: '#006400' }}>
          <ListItem disablePadding >
            <ListItemButton sx={{ ':hover': { backgroundColor: '#c7f9cc' } }} >
              <ListItemIcon> <MdUpdate color={"#006400"} size={"1.75rem"} /> </ListItemIcon>
              <ListItemText primary={"Update Profile"} />
            </ListItemButton>
          </ListItem></Link>
      
          <Link to="/profile" style={{ textDecoration: 'none',color: '#006400' }}>
          <ListItem disablePadding >
            <ListItemButton sx={{ ':hover': { backgroundColor: '#c7f9cc' } }} >
              <ListItemIcon> <MdOutlineSecurity color={"#006400"} size={"1.75rem"} /> </ListItemIcon>
              <ListItemText primary={"Reset Password"} />
            </ListItemButton>
          </ListItem></Link>

          <Link to="/register" style={{ textDecoration: 'none',color: '#006400' }}>
          <ListItem disablePadding >
            <ListItemButton sx={{ ':hover': { backgroundColor: '#c7f9cc' } }} >
              <ListItemIcon> <FaRegGem color={"#006400"} size={"1.75rem"} /> </ListItemIcon>
              <ListItemText primary={"Register"} />
            </ListItemButton>
          </ListItem></Link>
      
          <Link to="/login" style={{ textDecoration: 'none',color: '#006400' }}>
          <ListItem disablePadding >
            <ListItemButton sx={{ ':hover': { backgroundColor: '#c7f9cc' } }} >
              <ListItemIcon> <AiOutlineLogin color={"#006400"} size={"1.75rem"} /> </ListItemIcon>
              <ListItemText primary={"Login"} />
            </ListItemButton>
          </ListItem></Link>

          <Link to="/profile" style={{ textDecoration: 'none',color: '#006400' }}>
          <ListItem disablePadding >
            <ListItemButton sx={{ ':hover': { backgroundColor: '#c7f9cc' } }} >
              <ListItemIcon> <AiOutlineLogout color={"#006400"} size={"1.75rem"} /> </ListItemIcon>
              <ListItemText primary={"Logout"} />
            </ListItemButton>
          </ListItem></Link>

          

      </List>
    </Box>
  );

  return (
    <div>
     {['right'].map((anchor) => {
        // Define the 'anchor' variable here
        const buttonAnchor = anchor;
        return (
          <React.Fragment key={anchor}>
            <Button onClick={toggleDrawer(buttonAnchor, true)} 
             style={{textDecoration:'none', fontsize:'1.5rem',color:"white" ,position:"absolute" ,top:'-3px',right:'-3rem',fontSize:"1.5rem", '&:hover':{textDecoration:'none', backgroundColor:"none", color:"#006400"}}}
             >{<AiOutlineMenu/>}</Button>
            <Drawer
              style={{zIndex:"99999"}}
              anchor={buttonAnchor}
              open={state[buttonAnchor]}
              onClose={toggleDrawer(buttonAnchor, false)}
            >
              {list(buttonAnchor)}
            </Drawer>
          </React.Fragment>
        );
      })}
    </div>
  );
}
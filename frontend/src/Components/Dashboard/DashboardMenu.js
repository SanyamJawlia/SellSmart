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
import { BiHome, BiUserCircle } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import logo from "../../Images/logo.png"
import { AiOutlineContacts, AiOutlineHome, AiOutlineLogin, AiOutlineLogout, AiOutlineMenu } from 'react-icons/ai';
import { RiProductHuntLine } from 'react-icons/ri';
import { LiaShippingFastSolid } from 'react-icons/lia';
import { MdCreateNewFolder } from 'react-icons/md';
import { LuLayoutDashboard } from 'react-icons/lu';

export default function DashboardMenu() {
  const [state, setState] = React.useState({right: false,});

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 250 , height: '75vh', position:"relative",top:"18vh"}}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>

          <Link to="/">
            <img src={logo} alt="logo" width={"200px"} />
          </Link>
          
          <Link to="/dashboard" style={{ textDecoration: 'none', color: '#006400' }}>
          <ListItem disablePadding >
            <ListItemButton sx={{ ':hover': { backgroundColor: '#c7f9cc' } }} >
              <ListItemIcon> <LuLayoutDashboard color={"#006400"} size={"1.75rem"} /> </ListItemIcon>
              <ListItemText primary={"Dashboard"} />
            </ListItemButton>
          </ListItem></Link>
          
          
          <Link to="/createProduct" style={{ textDecoration: 'none', color: '#006400' }}>
          <ListItem disablePadding >
            <ListItemButton sx={{ ':hover': { backgroundColor: '#c7f9cc' } }} >
              <ListItemIcon> <MdCreateNewFolder color={"#006400"} size={"1.75rem"} /> </ListItemIcon>
              <ListItemText primary={"CreateProduct"} />
            </ListItemButton>
          </ListItem></Link>
          
          <Link to="/getAllUsers" style={{ textDecoration: 'none', color: '#006400' }}>
          <ListItem disablePadding >
            <ListItemButton sx={{ ':hover': { backgroundColor: '#c7f9cc' } }} >
              <ListItemIcon> <BiUserCircle color={"#006400"} size={"1.75rem"} /> </ListItemIcon>
              <ListItemText primary={"Our Customers"} />
            </ListItemButton>
          </ListItem></Link>
          
          <Link to="/getAllProducts" style={{ textDecoration: 'none', color: '#006400' }}>
          <ListItem disablePadding >
            <ListItemButton sx={{ ':hover': { backgroundColor: '#c7f9cc' } }} >
              <ListItemIcon> <RiProductHuntLine color={"#006400"} size={"1.75rem"} /> </ListItemIcon>
              <ListItemText primary={"All Products"} />
            </ListItemButton>
          </ListItem></Link>
          
          <Link to="/getAllOrders" style={{ textDecoration: 'none', color: '#006400' }}>
          <ListItem disablePadding >
            <ListItemButton sx={{ ':hover': { backgroundColor: '#c7f9cc' } }} >
              <ListItemIcon> <LiaShippingFastSolid color={"#006400"} size={"1.75rem"} /> </ListItemIcon>
              <ListItemText primary={"Manage Orders"} />
            </ListItemButton>
          </ListItem></Link>
          



      </List>
      <Divider />
      <List>
      
          <Link to="/" style={{ textDecoration: 'none',color: '#006400' }}>
          <ListItem disablePadding >
            <ListItemButton sx={{ ':hover': { backgroundColor: '#c7f9cc' } }} >
              <ListItemIcon> <BiHome color={"#006400"} size={"1.75rem"} /> </ListItemIcon>
              <ListItemText primary={"Home"} />
            </ListItemButton>
          </ListItem></Link>
      
          <Link to="/product" style={{ textDecoration: 'none',color: '#006400' }}>
          <ListItem disablePadding >
            <ListItemButton sx={{ ':hover': { backgroundColor: '#c7f9cc' } }} >
              <ListItemIcon> <RiProductHuntLine color={"#006400"} size={"1.75rem"} /> </ListItemIcon>
              <ListItemText primary={"Products"} />
            </ListItemButton>
          </ListItem></Link>

          <Link to="/profile" style={{ textDecoration: 'none',color: '#006400' }}>
          <ListItem disablePadding >
            <ListItemButton sx={{ ':hover': { backgroundColor: '#c7f9cc' } }} >
              <ListItemIcon> <BiUserCircle color={"#006400"} size={"1.75rem"} /> </ListItemIcon>
              <ListItemText primary={"Proflie"} />
            </ListItemButton>
          </ListItem></Link>

          

      </List>
    </Box>
  );

  return (
    <div>
     {['left'].map((anchor) => {
        // Define the 'anchor' variable here
        const buttonAnchor = anchor;
        return (
          <React.Fragment key={anchor}>
            <Button onClick={toggleDrawer(buttonAnchor, true)} 
             style={{textDecoration:'none', width:"45px",height:"50px", position:"fixed" , top:"8rem", left:"1rem",  fontsize:'1.5rem',color:"white",fontSize:"1.5rem",backgroundColor:"#006400",borderRadius:"50%", '&:hover':{ backgroundColor:"#50A060"}}}
             >{<AiOutlineMenu/>}</Button>
            <Drawer
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
import React from 'react';
import { Link } from 'react-router-dom';
// import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Button, FormControl, Toolbar, Typography } from '@material-ui/core';
import userService from '../services/UserService';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Nav, Navbar} from 'react-bootstrap';
 const useStyles = makeStyles((theme) => ({
    Name: {
       color:"black",
     },
   }));
const TopMenu = () => {
    const classes = useStyles();
     return ( 
    
    ////////////
    <Navbar bg="light" variant="black">
    <Nav className="mx-auto">
      <Nav.Link href="/" style={{color:"black"}}>Home</Nav.Link>
      <Nav.Link href="/products" style={{color:"black"}}>Products</Nav.Link>
      <Nav.Link href="/contact-us" style={{color:"black"}}>Contact Us</Nav.Link>
      {!userService.isLoggedin()? <>
        <Nav.Link href="/login" style={{color:"black"}}>Login</Nav.Link>
        <Nav.Link href="/register" style={{color:"black"}}>Register</Nav.Link>   
             </>:<Button variant="contained"  onClick={(e)=>{
                 userService.logout();
                 window.location.reload();
             }}>Log Out {userService.getLoggedinUser().name}</Button>}
    </Nav>
  </Navbar>
    );

}
 
export default TopMenu;
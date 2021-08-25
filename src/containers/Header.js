import React, {useState} from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';


import {useHistory} from 'react-router-dom'
import logo from '../icons/colorful_logo.jpeg';
import facebook from '../icons/facebook.svg';
import instagram from '../icons/instagram.svg';
import linkedin from '../icons/linkedin.svg';
import twitter from '../icons/twitter.svg';

import Button from '@material-ui/core/Button';
import styles from '../css/Header.module.css'


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    [theme.breakpoints.up('md')]:{
        display: 'none',
    }
    
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  button: {
    color: "black",
    background : "white",
  }

}));

  



function Header(props){
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const history = useHistory();
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
        color = "white"
      >
        <Toolbar>
          <IconButton
            color="black"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
        <li onClick = {() => history.push('/')}><a href = "" className = {styles.headerlinks}> Home </a> </li> 
            <li className = {styles.links}> <a href = "#aboutus" className = {styles.headerlinks} > About </a></li>
            <li > <a href = "#featured" className = {styles.headerlinks} style = {{display:"none"}}> Featured  </a></li>
            <li > <a href = "#contact-us" className = {styles.headerlinks}>Contact Us </a></li>
            <li  onClick = {() => history.push('/aljalilgarden')}> <a href = "" className = {styles.headerlinks}>Al-Jalil Housing Scheme </a></li>
            <li onClick = {() => history.push('/alnoororchard')}> <a href = "" className = {styles.headerlinks}>Al-Noor Orchard</a></li>
            <li onClick = {() => history.push('/albariresidencia')}> <a href = "" className = {styles.headerlinks}>Al-Bari Resedencia </a></li>
        </List>
        <Divider />
        <List>
        <i style = {{padding: "0 5px"}} ><a href = "http://fb.com/surePropertiesPakistan"><img src = {facebook} alt = "facebook" style = {{width:"15px",height:"15px"}}></img></a></i>
                <i style = {{padding: "0 5px"}}><a  href = "https://www.instagram.com/surepropertiespk/"><img src = {instagram} alt = "instagram" style = {{width:"15px",height:"15px"}}></img></a></i>
                <i style = {{padding: "0 5px"}}><a href = "https://www.linkedin.com/company/sureproperties/"><img src = {linkedin} alt = "linkedin" style = {{width:"15px",height:"15px"}}></img></a></i>
                <i style = {{padding: "0 5px"}}><a href = "https://twitter.com/PropertiesSure"><img src = {twitter} alt = "twitter" style = {{width:"15px",height:"15px"}}></img></a></i>
        </List>
      </Drawer>
      
    </div>
    <header className = {styles.header}>
    <img className = "logo" src= {logo} alt = "a" style = {{margin:"0 5%",padding:"5px 0"}}></img>
    
    <nav> 
        
        <ul className = {styles.headerlist}>
             <li onClick = {() => history.push('/')}><a href = "" className = {styles.headerlinks}> Home </a> </li> 
            <li className = {styles.links}> <a href = "#aboutus" className = {styles.headerlinks} > About </a></li>
            <li > <a href = "#featured" className = {styles.headerlinks} style = {{display:"none"}}> Featured  </a></li>
            <li > <a href = "#contact-us" className = {styles.headerlinks}>Contact Us </a></li>
            <li  onClick = {() => history.push('/aljalilgarden')}> <a href = "" className = {styles.headerlinks}>Al-Jalil Housing Scheme </a></li>
            <li onClick = {() => history.push('/alnoororchard')}> <a href = "" className = {styles.headerlinks}>Al-Noor Orchard </a></li>
            <li onClick = {() => history.push('/albariresidencia')}> <a href = "" className = {styles.headerlinks}>Al-Bari Resedencia </a></li>
            

        </ul>
        
        <div className = "social">
            <div>
                <i><Button variant= "contained" className = {classes.button}><a href= "tel:+92-331-4900" style = {{textDecoration:"none",color:"black"}}>0333 3627426</a></Button></i>
            </div>
            <div style ={{display:"flex",justifyContent: "flex-start", padding:"5px 0" }}>
                <i style = {{padding: "2px 5px"}} ><a href = "http://fb.com/surePropertiesPakistan"><img src = {facebook} alt = "facebook" style = {{width:"15px",height:"15px"}}></img></a></i>
                <i style = {{padding: "2px 5px"}}><a  href = "https://www.instagram.com/surepropertiespk/"><img src = {instagram} alt = "instagram" style = {{width:"15px",height:"15px"}}></img></a></i>
                <i style = {{padding: "2px 5px"}}><a href = "https://www.linkedin.com/company/sureproperties/"><img src = {linkedin} alt = "linkedin" style = {{width:"15px",height:"15px"}}></img></a></i>
                <i style = {{padding: "2px 5px"}}><a href = "https://twitter.com/PropertiesSure"><img src = {twitter} alt = "twitter" style = {{width:"15px",height:"15px"}}></img></a></i>
            </div>
        
        </div>
    </nav>
    
   <div  className = "checked" >
    <div className = "hamburger" ></div>
    </div>
    
    
</header> 
</>
)
}



export default Header;
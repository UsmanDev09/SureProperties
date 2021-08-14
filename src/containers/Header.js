import React, {useState} from 'react';
import {useHistory} from 'react-router-dom'
import logo from './icons/black_logo.png';
import facebook from './icons/facebook.svg';
import instagram from './icons/instagram.svg';
import linkedin from './icons/linkedin.svg';
import twitter from './icons/twitter.svg';

import Button from '@material-ui/core/Button';
import styles from './Header.module.css'

import {makeStyles} from '@material-ui/core';
const useStyles = makeStyles({
    button:{
        backgroundColor: 'white',
        outline:'none',
        boxShadow: ' none',
        border: '1px solid grey',
        
        
        '&:hover':{
            background:'none',
            boxShadow:'none',
        }

    }
})

function Header(){
    const history = useHistory()
    const classes = useStyles();
    const [isOpen,setisOpen] = useState(false);
    function toggleMenu(){
        let nav = document.querySelector("nav");
        let logo = document.querySelector(".logo");
        let search = document.querySelector("#search")
        let checked = document.querySelector('.checked');
        if(isOpen === false){
           setisOpen(true);
            nav.style.display = "block";
            logo.style.display = "none";
            search.style.display = "none";
            checked.classList.add('open');
           // document.querySelector(" header > div > div.hamburger::after").style.transform = "translateX(-50px)"
        }else{
            
            setisOpen(false);           
            nav.style.display = "none";
            logo.style.display = "block";
            search.style.display = "flex";
          checked.classList.remove('open');
        }
    }
    return(
    <header className = {styles.header}>
    <img className = "logo" src= {logo} alt = "a" style = {{width:"66px", height:"60px",margin:"0 5%",padding:"10px 0"}}></img>
    
    <nav> 
        
        <ul className = {styles.headerlist}>
             <li onClick = {() => history.push('/')}><a href = "#" className = {styles.headerlinks}> <b>Home </b></a> </li> 
            <li className = {styles.links}onClick = {toggleMenu}> <a href = "#searchh" className = {styles.headerlinks}> Search </a></li>
            <li onClick = {toggleMenu}> <a href = "#featured" className = {styles.headerlinks}> Featured  </a></li>
            <li onClick = {toggleMenu}> <a href = "#contact" className = {styles.headerlinks}>Contact Us </a></li>
            <li> </li>

        </ul>
        
        <div className = "social">
            <div>
                <i><Button variant= "contained" className = {classes.button}><a href= "tel:+92-331-4900" style = {{textDecoration:"none",color:"black"}}>+92 331 409 3900</a></Button></i>
            </div>
            <div style ={{display:"flex",justifyContent:"center"}}>
                <i ><a href = "http://fb.com/surePropertiesPakistan"><img src = {facebook} alt = "facebook" style = {{width:"15px",height:"15px",padding:"10px 10px 10px 0"}}></img></a></i>
                <i ><a  href = "https://www.instagram.com/surepropertiespk/"><img src = {instagram} alt = "instagram" style = {{width:"15px",height:"15px",padding:"10px"}}></img></a></i>
                <i><a href = "https://www.linkedin.com/company/sureproperties/"><img src = {linkedin} alt = "linkedin" style = {{width:"15px",height:"15px",padding:"10px"}}></img></a></i>
                <i><a href = "https://twitter.com/PropertiesSure"><img src = {twitter} alt = "twitter" style = {{width:"15px",height:"15px",padding:"10px"}}></img></a></i>
            </div>
        
        </div>
    </nav>
    
   <div  className = "checked" onClick = {toggleMenu}>
    <div className = "hamburger" ></div>
    </div>
    
    
</header>
)
}
export default Header;
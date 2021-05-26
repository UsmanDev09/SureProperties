import React, {useState} from 'react';
import logo from './icons/colorful_logo.png';
import facebook from './icons/facebook.svg';
import instagram from './icons/instagram.svg';
import linkedin from './icons/linkedin.svg';
import twitter from './icons/twitter.svg';

import styles from './Header.module.css'
function Header(){
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
    <img className = "logo" src= {logo} alt = "a" style = {{width:"100px", height:"100px"}}></img>
    
    <nav> 
        <ul className = {styles.headerlist}>
            {/* <li><a href = "#" className = {styles.headerlinks}> <b>Home </b></a> </li> */}
            <li onClick = {toggleMenu}> <a href = "#searchh" className = {styles.headerlinks}> <b> Search </b></a></li>
            <li onClick = {toggleMenu}> <a href = "#featured" className = {styles.headerlinks}> <b>Featured </b> </a></li>
            <li onClick = {toggleMenu}> <a href = "#contact" className = {styles.headerlinks}> <b> Contact Us </b> </a></li>
            <li> </li>

        </ul>
        <div className = "social">
            
            <i ><a href = "http://fb.com/surePropertiesPakistan"><img src = {facebook} alt = "facebook" style = {{width:"20px",height:"20px"}}></img></a></i>
            <i ><a  href = "https://www.instagram.com/surepropertiespk/"><img src = {instagram} alt = "instagram" style = {{width:"20px",height:"20px"}}></img></a></i>
            <i><a href = "https://www.linkedin.com/company/sureproperties/"><img src = {linkedin} alt = "linkedin" style = {{width:"20px",height:"20px"}}></img></a></i>
            <i><a href = "https://twitter.com/PropertiesSure"><img src = {twitter} alt = "twitter" style = {{width:"20px",height:"20px"}}></img></a></i>
            
        </div>
    </nav>
    
   <div  className = "checked" onClick = {toggleMenu}>
    <div className = "hamburger" ></div>
    </div>
    
    
</header>
)
}
export default Header;
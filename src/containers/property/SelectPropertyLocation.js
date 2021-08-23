import React, {useState,Fragment} from 'react';
import styles from '../../css/SelectPropertyLocation.module.css';
import Popup from '../../containers/Popup';
import location from '../../icons/location.svg';
function SelectPropertyLocation(props){
    
    const [height,setHeight] = useState('0');
    const [expanded, setExpanded] = useState(false);
    const [display,setDisplay] = useState("none");
      function toggleSelectionMenu() {
     
          let checkbox = document.querySelector("#dropdown");
          let  body = document.querySelector("body");
     
          if(!expanded && window.innerWidth > 500){
            checkbox.style.display = "flex";
            setExpanded(true);

          }else if(expanded && window.innerWidth > 500){
            checkbox.style.display = 'none';
            setExpanded(false);
          }

          else if(!expanded && window.innerWidth <= 500){
            setHeight("auto");
            setExpanded(true);
            setDisplay("block");
            body.style.overflow = "hidden";
         
        
            
          }else if(expanded && window.innerWidth <= 500){
            setHeight("0px");
            setExpanded(false);
            setDisplay("none");
            body.style.overflow = "visible";
          } 
      }
      return(
          <Fragment>
            {window.innerWidth > 500?  <div className={styles.locationselector}>
            <div className = {styles.wrap} onClick = {toggleSelectionMenu}>
            <img src = {location} alt ="s" style ={{width:"40px", height: "30px",position:"relative", top:"7px", left:"10px",padding:"0"}}></img>
              </div>
              <ul id = "dropdown" className = {styles.dropdown}>
                  <li > <input type = "checkbox"  onClick = {() => props.getLocation('Lahore')}/><label for = ""> Lahore </label>  </li>
                  <li > <input type = "checkbox" onClick = {() => props.getLocation('Islamabad')} /><label for = ""> Islamabad</label>  </li>
                  <li > <input type = "checkbox" onClick = {() => props.getLocation('Karachi')} /><label for = ""> Karachi</label>  </li>
                  <li> <input type = "checkbox" onClick = {() => props.getLocation('Pehsawar')}/><label for = ""> Peshawar </label>  </li>
              </ul> 
            </div>: 
           
           <Fragment>
            <div className={styles.locationselector}>
            <div className = {styles.wrap} onClick = {toggleSelectionMenu}>
            <img src = {location} alt ="s" style ={{width:"25px", height: "25px",position:"relative", top:"4px", left:"10px"}}></img>
            </div>
            </div>
           
            <Popup id = "popup" height = {height} display ={display} list= {<div><ul id = "dropdown">
                  <li  style = {{height:"50px",fontSize: "1.1rem",color:"black",textAlign: "left"}}> <input type = "checkbox" onClick = {() => props.getLocation('Lahore')} /><label for = ""> Lahore </label>  </li>
                  <li  style = {{height:"50px",fontSize: "1.1rem",color:"black",textAlign: "left"}}> <input type = "checkbox" onClick = {() => props.getLocation('Islamabad')} /><label for = ""> Islamabad</label>  </li>
                  <li  style = {{height:"50px",fontSize: "1.1rem",color:"black",textAlign: "left"}}> <input type = "checkbox" onClick = {() => props.getLocation('Karachi')} /><label for = ""> Karachi</label>  </li>
                  <li  style = {{height:"50px",fontSize: "1.1rem",color:"black",textAlign: "left"}}> <input type = "checkbox" onClick = {() => props.getLocation('Pehsawar')}/><label for = ""> Peshawar </label>  </li>
            </ul> 
            <button style = {{display:"block",  margin:"0 auto", width:"90%", height:"30px", border: "none", borderRadius: "2px", backgroundColor: "#0071c2",marginBottom:"20px", fontSize : "1.1rem"}} onClick = {toggleSelectionMenu}>Done</button></div>
            } >
            
            </Popup> 
          </Fragment>
           }
            
            
          </Fragment>  
      )
  }
// make an array of locationsChecked [Lahore,Islo]
export default SelectPropertyLocation;
import React, {useState,Fragment} from 'react';
import Popup from './Popup';
import style from './SelectPropertyType.module.css';
import home from './icons/home.svg'
function SelectPropertyType(props){
  /* let selectedType = {};
   const [type,selected] = useState({
    Building : false,
    House : false,
    Plot : false,
    FarmHouse : false  
  }) */ 
  const [height,setHeight] = useState('0');
  const [expanded, setExpanded] = useState(false);
  const [display,setDisplay] = useState("none");

  
    function toggleSelectionMenu() {
        
      let checkbox = document.querySelector("#drop");
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
      
     
    
        
      }else if(expanded && window.innerWidth <= 500){
        setHeight("0px");
        setExpanded(false);
        setDisplay("none");
        body.style.overflow = "visible";
      } 
    }
    
    return(
        <Fragment>
        {window.innerWidth > 500 ?  
          <div className={style.selector}>
            
            <div className = {style.wrapper} onClick = {toggleSelectionMenu}>
            <img src = {home} alt ="s" style ={{width:"40px", height: "30px",position:"relative", top:"8px", left:"10px",padding:"0"}}></img>
            </div>
            <ul id = "drop" className = {style.dropdown}>
                <li> <input type = "checkbox" onClick = {() => props.getType('Building')} /><label for = ""> Building </label>  </li>
                <li> <input type = "checkbox" onClick = {() => props.getType('House')}/><label for = ""> House </label>  </li>
                <li> <input type = "checkbox"  onClick = {() => props.getType('Plot')}/><label for = ""> Plot </label>  </li>
                <li> <input type = "checkbox"  onClick = {() => props.getType('FarmHouse')}/><label for = ""> FarmHouse </label>  </li>
            </ul>
            {/* <FindProperty type = {type} /> */}
            </div>
        :<Fragment>
             <div className={style.selector}>
            <div className = {style.wrapper} onClick = {toggleSelectionMenu}>
            <img src = {home} alt ="s" style ={{width:"25px", height: "25px",position:"relative", top:"4px", left:"10px"}}></img>
            </div>
            </div>
            <Popup height = {height} display ={display} list = {
              <div>
                 <ul id = "drop" className = {style.dropdown}>
                 <li> <input type = "checkbox" onClick = {() => props.getType('Building')} /><label for = ""> Building </label>  </li>
                 <li> <input type = "checkbox" onClick = {() => props.getType('House')}/><label for = ""> House </label>  </li>
                 <li> <input type = "checkbox"  onClick = {() => props.getType('Plot')}/><label for = ""> Plot </label>  </li>
                 <li> <input type = "checkbox"  onClick = {() => props.getType('FarmHouse')}/><label for = ""> FarmHouse </label>  </li>
                </ul>
              <button style = {{display:"block",  margin:"0 auto", width:"90%", height:"30px", border: "none", borderRadius: "2px", backgroundColor: "#0071c2",marginBottom:"20px", fontSize : "1.1rem"}} onClick = {toggleSelectionMenu}>Done</button>
              </div>

            }>
            </Popup>
        </Fragment>} 
        </Fragment>  
    )
}
export default SelectPropertyType;
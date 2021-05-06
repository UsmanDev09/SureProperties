import React,{useState,Fragment} from 'react';
import styles from './SelectPriceRange.module.css';
import Popup from './Popup';
import price from './icons/property.svg';
function SelectPriceRange(props){
    
    const [height,setHeight] = useState('0');
  const [expanded, setExpanded] = useState(false);
  const [display,setDisplay] = useState("none");

  
    function toggleSelectionMenu() {
        
      let checkbox = document.querySelector("#dropdownMenu");
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
        <div className = {styles.priceselector}>
          <div  className = {styles.wrapped} onClick = {toggleSelectionMenu}>  {/* for clicking  */}
          <img src = {price} alt ="s" style ={{width:"40px", height: "34px",position:"relative", top:"7px", left:"10px",padding:"0"}}></img>
          </div>
          
          <ul id = "dropdownMenu" className = {styles.dropdown}>
              <div className = {styles.columnOne}>
                <h3 style =  {{paddingLeft: "10px", margin: "10px",  textDecoration: "underline", textUnderlineOffset: "3px"}}> From </h3>
                <li> <input type = "checkbox"  onClick = {() => props.getFromPrice('10000')}/><label for = ""> 10000 </label>  </li>
                <li> <input type = "checkbox" onClick = {() => props.getFromPrice('200000')} /><label for = ""> 200000</label>  </li>
                <li> <input type = "checkbox" onClick = {() => props.getFromPrice('300000')} /><label for = ""> 300000</label>  </li>
                <li> <input type = "checkbox" onClick = {() => props.getFromPrice('400000')}/><label for = ""> 400000 </label>  </li>
              </div>
              <div className = {styles.columnTwo}>
                <h3 style=  {{paddingLeft: "10px", margin: "10px",  textUnderlineOffset: "3px", textDecoration: "underline"}}> To </h3>
                <li> <input type = "checkbox"  onClick = {() => props.getToPrice('200000')}/><label for = ""> 200000 </label>  </li>
                <li> <input type = "checkbox" onClick = {() => props.getToPrice('300000')} /><label for = ""> 300000</label>  </li>
                <li> <input type = "checkbox" onClick = {() => props.getToPrice('400000')} /><label for = ""> 400000</label>  </li>
                <li> <input type = "checkbox" onClick = {() => props.getToPrice('500000')}/><label for = ""> 500000 </label>  </li>
              </div>
          
          </ul>
        </div>
          
        :<Fragment>
        <div className = {styles.priceselector}>
          <div  className = {styles.wrapped} onClick = {toggleSelectionMenu}>  {/* for clicking  */}
          <img src = {price} alt ="s" style ={{width:"25px", height: "25px",position:"relative", top:"5px", left:"10px"}}></img>
          </div>
          </div>
        <Popup height = {height} display ={display} list = {
           <div>
           <ul id = "dropdownMenu" className = {styles.dropdown}>
           <div className = {styles.columnOne}>
             <h3 style =  {{paddingLeft: "10px", margin: "10px",  textDecoration: "underline", textUnderlineOffset: "3px"}}> From </h3>
             <li> <input type = "checkbox"  onClick = {() => props.getFromPrice('10000')}/><label for = ""> 10000 </label>  </li>
             <li> <input type = "checkbox" onClick = {() => props.getFromPrice('200000')} /><label for = ""> 200000</label>  </li>
             <li> <input type = "checkbox" onClick = {() => props.getFromPrice('300000')} /><label for = ""> 300000</label>  </li>
             <li> <input type = "checkbox" onClick = {() => props.getFromPrice('400000')}/><label for = ""> 400000 </label>  </li>
           </div>
           <div className = {styles.columnTwo}>
             <h3 style=  {{paddingLeft: "10px", margin: "10px",  textUnderlineOffset: "3px", textDecoration: "underline"}}> To </h3>
             <li> <input type = "checkbox"  onClick = {() => props.getToPrice('200000')}/><label for = ""> 200000 </label>  </li>
             <li> <input type = "checkbox" onClick = {() => props.getToPrice('300000')} /><label for = ""> 300000</label>  </li>
             <li> <input type = "checkbox" onClick = {() => props.getToPrice('400000')} /><label for = ""> 400000</label>  </li>
             <li> <input type = "checkbox" onClick = {() => props.getToPrice('500000')}/><label for = ""> 500000 </label>  </li>
           </div>
       
       </ul>
        <button style = {{display:"block",  margin:"0 auto", width:"90%", height:"30px", border: "none", borderRadius: "2px", backgroundColor: "#0071c2",marginBottom:"20px", fontSize : "1.1rem"}} onClick = {toggleSelectionMenu}>Done</button></div>
        }>
        </Popup>
        </Fragment>
        } 
         
      </Fragment>  
    )
}
export default SelectPriceRange;
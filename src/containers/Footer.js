import logo from './icons/colorful_logo.png';
import facebook from './icons/facebook.svg';
import instagram from './icons/instagram.svg';
import linkedin from './icons/linkedin.svg';
import twitter from './icons/twitter.svg';
import phone from './icons/phone.svg';
import address from './icons/address.svg';
import jalil from './icons/al-jalil.png'
import styles from './Footer.module.css';
const Footer = () => {
    
    return(
    <footer style = {{backgroundColor : "rgb(252 202 9 / 28%)"}}>
        
         <div className = {styles.social}>

                    <div className = {styles.contents}>
                    <ul >
                        <li><a href = "#" className = {styles.footerlinks}> <b>Home </b></a> </li>
                        <li> <a href = "#" className = {styles.footerlinks}> <b> Search </b></a></li>
                        <li> <a href = "#" className = {styles.footerlinks}> <b>Featured </b> </a></li>
                        <li> <a href = "#" className = {styles.footerlinks}> <b> Contact Us </b> </a></li>
                        

                    </ul>
                    </div>
                    <div className = {styles.social_icons} >
                        <h3 className = {styles.follow_heading} style = {{fontSize:"1em"}}> Follow us!</h3>
                        <div className = {styles.socialwrapper}  >
                            <div className = "fac" >
                                <img src = {facebook} alt = "facebook" ></img>
                            
                            </div>    
                            <div className = "instagram"> 
                                <img src = {instagram} style = {{width:"20px",height:"20px"}} alt = "instagram" ></img>
                            
                            </div>                           
                            <div className = "linkedin">
                                <img src = {linkedin} alt = "linkedin" ></img>
                            
                            </div>
                            <div className = "twitter">
                                <img src = {twitter} alt = "twitter" ></img>
                            
                            </div>
                        </div>
                    </div>
                  
                    <div className = {styles.contact} style = {{display: "flex",flexDirection: "column"}} >
                        <h3 className = {styles.contact_heading} style = {{fontSize:"1em"}}>Contact us</h3>
                        <p style = {{margin:"0",display:"flex",alignItems:"flex-end",marginBottom:"10px"}}><img src = {phone} alt = "twitter" style = {{width:"20px",height:"20px",marginRight:"10px"}}></img> 03314093900</p>
                        <p style = {{margin:"0",marginBottom:"20px",display:"flex",alignItems:"flex-end"}}><img src = {address} alt = "twitter" style = {{width:"20px",height:"20px",marginRight:"10px"}}></img> Address </p>
                    </div>

                    <div className ={styles.partners}>
                        <img src= {logo} alt = "sure properties" className={styles.sureprop} style={{width:"80px",height:"80px"}}></img>
                        <img src= {jalil} alt = "al-jalil" className = {styles.jalil} style={{width:"70px",height:"70px"}}></img>     
                    </div>
        </div>
        
            
           
          
       
       
           
         </footer>
    )
}

export default Footer;
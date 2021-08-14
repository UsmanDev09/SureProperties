import logo from './icons/black_logo.png';
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
    <footer style = {{backgroundColor : "white"}}>
        
         <div className = {styles.social}>

                    <div className = {styles.contents}>
                    <ul >
                        {/* <li><a href = "#" className = {styles.footerlinks}> <b>Home </b></a> </li> */}
                        <li> <a href = "#searchh" className = {styles.footerlinks}> Search </a></li>
                        <li> <a href = "#feautured" className = {styles.footerlinks}> Featured  </a></li>
                        <li> <a href = "#contact" className = {styles.footerlinks}>  Contact Us  </a></li>
                        

                    </ul>
                    </div>
                    <div className = {styles.social_icons} >
                        <h3 className = {styles.follow_heading} style = {{fontSize:"1em",fontFamily:'Quickstand,sans-serif',fontWeight:"500"}}> Follow us!</h3>
                        <div className = {styles.socialwrapper}  >
                        <div className = "instagram"> 
                                <a href = "https://www.instagram.com/surepropertiespk/">
                                <img src = {instagram} className = {styles.footer_Icons} style = {{width:"15px",height:"15px",margin:"0 10px 0 0"}} alt = "instagram" ></img>
                                </a>
                            </div>                           
                            <div className = "fac" >
                                <a href = "http://fb.com/surePropertiesPakistan">
                                    <img src = {facebook} className = {styles.footer_Icons} style = {{width:"15px",height:"15px",margin:"0 10px 0 0"}} alt = "facebook" ></img>
                                </a>
                            </div>    
                            
                            <div className = "linkedin">
                                <a href = "https://www.linkedin.com/company/sureproperties/">
                                <img src = {linkedin} className = {styles.footer_Icons} style = {{width:"15px",height:"15px",margin:"0 10px 0 0"}}alt = "linkedin" ></img>
                                </a>
                            </div>
                            <div className = "twitter">
                                <a href = "https://twitter.com/PropertiesSure">
                                    <img src = {twitter} className = {styles.footer_Icons} style = {{width:"15px",height:"15px"}}alt = "twitter" ></img>
                                </a>
                            </div>
                        </div>
                    </div>
                  
                    <div className = {styles.contact} style = {{display: "flex",flexDirection: "column"}} >
                        <h3 className = {styles.contact_heading} style = {{fontSize:"1em",fontFamily:'Quickstand,sans-serif',fontWeight:"500"}}>Contact us</h3>
                        <p style = {{margin:"0",display:"flex",alignItems:"flex-end",marginBottom:"10px",fontFamily:"'Quickstand',sans-serif",fontWeight:"500"}}><img src = {phone} alt = "twitter" style = {{width:"15px",height:"15px",marginRight:"10px"}}></img> 03314093900</p>
                        <p style = {{margin:"0",marginBottom:"20px",display:"flex",alignItems:"flex-end",fontFamily:"'Quickstand',sans-serif",fontWeight:"500"}}><img src = {address} alt = "twitter" style = {{width:"15px",height:"15px",marginRight:"10px"}}></img> <a href="mailto: usiddique09@gmail.com">Email Us</a> </p>
                    </div>

                    <div className ={styles.partners}>
                        <img src= {logo} alt = "sure properties" className={styles.sureprop} style={{width:"66px",height:"70px"}}></img>
                        <img src= {jalil} alt = "al-jalil" className = {styles.jalil} style={{width:"65px",height:"65px"}}></img>     
                    </div>
        </div>
        
            
           
          
       
       
           
         </footer>
    )
}

export default Footer;
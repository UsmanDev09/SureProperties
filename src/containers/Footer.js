import logo from '../icons/colorful_logo.png';
import facebook from '../icons/facebook.svg';
import instagram from '../icons/instagram.svg';
import linkedin from '../icons/linkedin.svg';
import twitter from '../icons/twitter.svg';
import phone from '../icons/phone.svg';
import address from '../icons/address.svg';
import email from '../icons/email.svg';
import jalil from '../icons/al-jalil.png';
import styles from '../css/Footer.module.css';

const Footer = () => {
    
    return(
    <footer style = {{backgroundColor : "white"}}>
        
         <div className = {styles.social}>
         <div className = {styles.social_icons} >
                        <h3  style = {{textAlign:"left"}}> About Us</h3>
                        <p style = {{fontFamily:"'Poppins',sans-serif", fontWeight:"500", textAlign:"left"}}>We are Authorized Dealers of Al-Noor and West Marina<br></br> which are the projects of Al-Jalil Gardens.</p>
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
                        <h3 > Contact Us</h3>
                        <p style = {{margin:"0",display:"flex",alignItems:"center",marginBottom:"10px",fontFamily:"'Poppins',sans-serif",fontWeight:"500"}}><img src = {phone} alt = "twitter" style = {{width:"15px",height:"15px",marginRight:"10px"}}></img> <a style = {{textDecoration : "none",color:"black"}} href= "tel:+92-331-4900" >0331 4093900</a></p>
                        <p style = {{margin:"0",marginBottom:"20px",display:"flex",alignItems:"center",fontFamily:"'Poppins',sans-serif",fontWeight:"500"}}><img src = {email} alt = "twitter" style = {{width:"15px",height:"15px",marginRight:"10px"}}></img> <a style = {{textDecoration : "none",color:"black"}}href="mailto: usiddique09@gmail.com">info@sureproperties.pk</a> </p>
                        <p style = {{margin:"0",marginBottom:"20px",display:"flex",alignItems:"center",fontFamily:"'Poppins',sans-serif",fontWeight:"500"}}><img src = {address} alt = "twitter" style = {{width:"20px",height:"20px",marginRight:"10px"}}></img> <a style = {{textDecoration : "none",color:"black"}}href="mailto: usiddique09@gmail.com">Faizput Interchange, Motorway M2, Main Shararpur Road, Lahore.</a> </p>
                    </div>

                    
                    <div className = {styles.contents}>
                        <h3>Quick Links</h3>
                    <ul >
                         <li><a href = "#" className = {styles.footerlinks}> Home </a> </li> 
                        <li> <a href = "#searchh" className = {styles.footerlinks}> About </a></li>
                        {/* <li> <a href = "#feautured" className = {styles.footerlinks}> Featured  </a></li> */}
                        <li> <a href = "#contact" className = {styles.footerlinks}>  Contact Us  </a></li>
                        

                    </ul>
                    </div>
                    

                    <div className ={styles.partners}>
                        <img src= {logo} alt = "sure properties" className={styles.sureprop} ></img>
                        <img src= {jalil} alt = "al-jalil" className = {styles.jalil} style={{width:"95px",height:"65px"}}></img>     
                    </div>

                   
        </div>
        
            
           
          
       
       
           
         </footer>
    )
}

export default Footer;
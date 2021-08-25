import react from 'react';
import realestate from '../icons/realestate.svg'
const AboutUs = () => {

    return(
        <>
        <div id= "aboutus" style = {{display:"flex",width:"90%",margin:"0 5%",flexDirection:window.innerWidth > 650? "row" : "column"}}>
            
            <div>
                <p style = {{fontWeight:"0", marginTop:"10px", marginLeft:"0%", fontFamily: "'Quicksand', sans-serif", fontSize:"1.1em"}}>We are <span style = {{/* backgroundColor:"#3f3d56", fontFamily: "system-ui",color:"white", borderRadius:"5px" */}}>  Authorized Dealers of Al-Noor and West Marina</span> which are the projects of Al-Jalil Gardens. </p>
            </div>
            <div>
                <img src = {realestate} style = {{width:"100%",margin:"0"}}></img>
            </div>
            </div>
        </>
    )

}

export default AboutUs;
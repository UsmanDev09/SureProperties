import { useInView } from 'react-intersection-observer';
import PropertyMap from './PropertyMap';
import styles from './Property.module.css';
import price from './icons/price.svg';
const Property = (props) => {
    const [ref, inView] = useInView({
        threshold : 0.5
    });
    const containerStyle = {
        height:"400px",
        width: "90%",
        margin: "0% 5%"
       
      }
    return(
      
        <div ref = {ref} className = {styles.propertywrapper} >
       
            <div className = {styles.mapswrapper}>
                <div className = {styles.leftwrapper}>
                <div className = {styles.propertyimage}>
                    <img src = {process.env.PUBLIC_URL+ props.element.image} style = {{width:"100%", height:"200px",borderRadius:"10px",padding:"5%"}}  alt="image"></img>
                </div>
                
                <div className = {styles.details}>
                    
                    <p>  <b>Property:</b> {props.element.propertyType} </p>
                    <p>  <b>City:</b> {props.element.location} </p>
                    <p style = {{display:"flex",justifyContent:"flex-start"}}> <b>Location:</b> {props.element.society} </p>
                    <p style = {{display:"flex",justifyContent:"flex-start"}}> <img src = {price} style = {{ width:"30px", height:"30px"}}></img>  {props.element.price} </p>
                    
                </div>
                </div>
                <div className = {styles.propertymap}>
                <PropertyMap latitude= {props.element.latitude} longitude = {props.element.longitude} ></PropertyMap>
                </div>
            </div> 
            
            
        </div>
    )
}

export default Property;
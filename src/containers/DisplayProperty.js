
import Property from './Property';

function DisplayProperty(props){
   
    if(props.data ){
     
        return props.data.map(function(element) {
            return (  <Property element = {element}  ></Property>)  
        })
    }else{
        return null;
    }
    
}

export default DisplayProperty;
import {useState,useEffect,Fragment} from 'react';
import {PropertyData} from '../PropertyData';
function FindProperty(props){
    const typeState = {...props.type};
    const locationState = {...props.location};
   
    let propertyFound = [];  // make this using state
    
    useEffect(() => {
        for(let values in typeState){
            if(typeState[values] === true){
                PropertyData.forEach((item,index,arr) => {
                    if(arr[index].propertyType === values){
                        propertyFound.push(arr[index]);
                    }
                })
            }   
        }
        console.log(propertyFound);
    }, [typeState]);
   

    return(
       null
    )
 
  
}
export default FindProperty;
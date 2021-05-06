import react, {Component} from 'react';
import {Map, InfoWindow,Marker, GoogleApiWrapper} from 'google-maps-react';

import styles from './Property.module.css';
class MapContainer extends Component  {
    
    render(props){
        
  

 


  
    return(
      
<Map google={this.props.google} zoom={15} onClick={this.onMapClicked} initialCenter = {{lat :this.props.latitude,lng: this.props.longitude}}  className = {styles.mapsss} >
    
    <Marker onMouseover={this.onMarkerClick} name={'SureProperties'} />
</Map>

)
    }
}
export default GoogleApiWrapper({
    apiKey: ("AIzaSyDKz2vjRwSKLjkv_Psvfqlbm0vSPvVk2sc")
  })(MapContainer);
import react, {Component} from 'react';
import {Map, InfoWindow,Marker, GoogleApiWrapper} from 'google-maps-react';
class MapContainer extends Component  {
    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
      };
     
      onMarkerClick = (props, marker, e) =>
        this.setState({
          selectedPlace: props,
          activeMarker: marker,
          showingInfoWindow: true
        });
     
      onMapClicked = (props) => {
        if (this.state.showingInfoWindow) {
          this.setState({
            showingInfoWindow: false,
            activeMarker: null
          })
        }
      };
     
   
    render(){
        const containerStyle = {
            height:"400px",
            width: "90%",
            margin: "0% 5%"
           
          }
          
        
          
    return(
      <div id = "contact">
<Map google={this.props.google} zoom={15} onClick={this.onMapClicked} initialCenter = {{lat :31.599669188077634,lng: 74.20679545926397}}containerStyle = {containerStyle}>
    
    <Marker onMouseover={this.onMarkerClick} name={'SureProperties'} />
    <Marker
    onMouseover={this.onMarkerClick} 
    title={'The marker`s title will appear as a tooltip.'}
    name={'Plot1'}
    position={{lat: 31.6, lng: 74.200}} />


    
    <InfoWindow
         
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <div>
              <h3>{this.state.selectedPlace.name}</h3>
            </div>
        </InfoWindow>

    
 </Map>
 </div>
)
    }
}
export default GoogleApiWrapper({
    apiKey: ("AIzaSyDKz2vjRwSKLjkv_Psvfqlbm0vSPvVk2sc")
  })(MapContainer);
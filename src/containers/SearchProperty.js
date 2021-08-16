import React, {Fragment,Component} from 'react';
import SelectPropertyLocation from './SelectPropertyLocation';
import DisplayProperty from './DisplayProperty';
import SelectPropertyType from './SelectPropertyType';
import SlideShow from './SlideShow';
import {PropertyData} from '../PropertyData';
import SelectPriceRange from '../containers/SelectPriceRange';
import styles from './SearchProperty.module.css';
import Header from './Header'
import Slider from './Slider';

import MapContainer from './Maps';

import Footer from './Footer';

  
class SearchProperty extends Component{

// DO THIS USING FUNCTIONAL COMPONENT
// USE NEWARRAY AS STATE ARRAY

constructor(){
    super();
    this.state = {
        type: {
            Building: false,
            House : false,
            Plot : false,
            FarmHouse : false,
        },
        location : {
            Lahore : false,
            Islamabad : false,
            Karachi : false,
            Peshawar : false
        },
        previousToPrice : [],
        lastChosenProperty : [],
        lastCheckedCities : [],
        lastCheckedPrices : [],
        fromPrice : 0,
        toPrice : 500000,
        clicked : false,
        propertyFound: [],
        isOpen : false
    }
    
    this.newArray ="";
    this.array = [];
    this.find = this.find.bind(this);
    this.findCity = this.findCity.bind(this);
    this.findPropertyType = this.findPropertyType.bind(this);
    // this.filterUsingPrice = this.filterUsingPrice.bind(this);
    this.getType = this.getType.bind(this);
    this.getLocation = this.getLocation.bind(this);
    this.getToPrice = this.getToPrice.bind(this);
    this.getFromPrice = this.getFromPrice.bind(this);
    this.advancedSearch = this.advancedSearch.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
}

    /* const [type,selectType] = useState({
        Building : false,
        House : false,
        Plot : false,
        FarmHouse : false  
      });

    const [location,selectLocation] = useState({
        Building : false,
        House : false,
        Plot : false,
        FarmHouse : false  
    });

    const [clicked,setClicked] = useState(false); */
    
     
    // const [propertyFound,setPropertyFound] = useState([]);
    
    findPropertyType(typeProps){
       
        this.setState({
            lastChosenProperty : []
        })

        this.newArray = [];
        for(let typesChecked in this.state.type){
            if(this.state.type[typesChecked] === true ){
                this.newArray = this.newArray.concat(typesChecked);       
            }
        }
        
        this.setState({
           lastChosenProperty: this.newArray
        },() => this.advancedSearch())
       
    }

    findCity(locationProps){

        this.setState({
            lastCheckedCities : []
        })

        this.newArray = [];
        for(let locationsChecked in this.state.location)
            if(this.state.location[locationsChecked] === true ){   
                this.newArray = this.newArray.concat(locationsChecked)
            }
        
        this.setState({
            lastCheckedCities : this.newArray       
        },() => this.advancedSearch())

    }        
   
   /*  filterUsingPrice(){
        
        this.newArray = [];
        this.newArray = this.newArray.filter((element) => {
            return (element.price >= this.state.fromPrice && element.price <= this.state.toPrice)
        })
        
    } */

    advancedSearch(){
      
        if(this.state.lastChosenProperty.length > 0 && this.state.lastCheckedCities.length === 0 && this.state.lastCheckedPrices.length === 0){
            let lastChosenPropertyCopy =[...this.state.lastChosenProperty];
            this.array = []
            this.newArray = []
            
            lastChosenPropertyCopy.forEach(element => {
                this.newArray = PropertyData.filter((item) => {
                    return item.propertyType === element
                })
                this.array = this.array.concat(this.newArray);
            });

            this.forceUpdate();
          
        }else if(this.state.lastCheckedCities.length > 0 && this.state.lastCheckedPrices.length === 0 && this.state.lastChosenProperty.length === 0){
            let lastCheckedCitiesCopy =[...this.state.lastCheckedCities];
            this.array = []
            this.newArray = []

            lastCheckedCitiesCopy.forEach(element => {
                this.newArray = PropertyData.filter((item) => {
                    return item.location === element
                })
                this.array = this.array.concat(this.newArray);
            });
           
            this.forceUpdate();
        }else if(this.state.lastCheckedPrices.length > 0 && this.state.lastCheckedCities.length === 0 && this.state.lastChosenProperty.length === 0 ){
            
            this.array = []
     
       
                this.array = PropertyData.filter((item) => {
                    return (item.price >= this.state.fromPrice && item.price <= this.state.toPrice)
                    
                }            
                )
                this.forceUpdate();
        
        }else if(this.state.lastChosenProperty.length > 0 && this.state.lastCheckedCities.length > 0 && this.state.lastCheckedPrices.length === 0){
            this.newArray = []
            this.array = []
            let propertyCopy = [...this.state.lastChosenProperty];
            let cityCopy = [...this.state.lastCheckedCities];
            propertyCopy.forEach((element) => {
                this.newArray = this.newArray.concat(PropertyData.filter(item => item.propertyType === element))
            })
            
            
            cityCopy.forEach((element) => {
                this.array = this.array.concat(this.newArray.filter(item => item.location === element))
            })
           
            
            this.forceUpdate();
        }else if(this.state.lastChosenProperty.length > 0 && this.state.lastCheckedCities.length === 0 && this.state.lastCheckedPrices.length > 0){
            this.newArray = []
            this.array = []
            let propertyCopy = [...this.state.lastChosenProperty];
            
            propertyCopy.forEach((element) => {
                this.newArray = this.newArray.concat(PropertyData.filter(item => item.propertyType === element))
            })
            
           this.array = this.array.concat(this.newArray.filter((item) => {
                return item.price >= this.state.fromPrice && item.price <= this.state.toPrice
           }))
            
            this.forceUpdate();
        }else if(this.state.lastChosenProperty.length === 0 && this.state.lastCheckedCities.length > 0 && this.state.lastCheckedPrices.length > 0){
            this.newArray = []
            this.array = []
            let locationCopy = [...this.state.lastCheckedCities];
            
            locationCopy.forEach((element) => {
                this.newArray = this.newArray.concat(PropertyData.filter(item => item.location === element))
            })
    
            
            
           this.array = this.array.concat(this.newArray.filter((item) => {
                return item.price >= this.state.fromPrice && item.price <= this.state.toPrice
           }))
            
            this.forceUpdate();
        }else if(this.state.lastChosenProperty.length > 0 && this.state.lastCheckedCities.length > 0 && this.state.lastCheckedPrices.length > 0){
            this.newArray = []
            this.cityArray = []
            this.array = []
            let propertyCopy = [...this.state.lastChosenProperty];
            let cityCopy = [...this.state.lastCheckedCities];
            propertyCopy.forEach((element) => {
                this.newArray = this.newArray.concat(PropertyData.filter(item => item.propertyType === element))
            })
        
            cityCopy.forEach((element) => {
                this.cityArray = this.cityArray.concat(this.newArray.filter(item => item.location === element))
            })
           
                this.array = this.array.concat(this.cityArray.filter(item => (item.price >= this.state.fromPrice && item.price <= this.state.toPrice)))

            
            this.forceUpdate();
        }
        else{ // when nothing is checked || user unchecks everything
            this.array = [];
            this.forceUpdate();
        }
    }



    find(){
        this.findPropertyType();
        this.findCity();
        this.filterUsingPrice();
        let toggle;
        this.setState({
            ...this.state,   
            clicked: !toggle,
            
        })
    }
    
     getType(typeProps){
        
        switch(typeProps){
            case('Building'):
          
                this.setState({
                    ...this.state,
                    type: {
                    ...this.state.type, 
                    'Building':!this.state.type.Building
                }},()=>{
                    this.findPropertyType(typeProps)
                   
                })
                
                break;
            case('House'):
                this.setState({
                    ...this.state,
                    type:{ 
                    ...this.state.type, 
                    'House':!this.state.type.House
                }},()=>{
                    this.findPropertyType(typeProps)
                   
                })
               
                break;
            case('Plot'):
                this.setState({
                    ...this.state,
                    type:{
                    ...this.state.type, 
                    'Plot':!this.state.type.Plot
                }},()=>{
                    this.findPropertyType(typeProps)
                  
                })
                break;
            case('FarmHouse'):
                
                this.setState({
                    ...this.state,
                    type:{
                    ...this.state.type, 
                    'FarmHouse':!this.state.type.FarmHouse
                }},()=>{
                    this.findPropertyType(typeProps)
                  
                })
                break;
            default:
                this.setState({...this.state})
        }
       
    }
    
    getLocation(locationProps){
      
        switch(locationProps){
            case('Lahore'):
                this.setState({
                    ...this.state,
                    location:{
                    ...this.state.location, 
                    'Lahore':!this.state.location.Lahore
                }},()=>{
                    this.findCity(locationProps)
                  
                })
                break;

            case('Islamabad'):
                this.setState({
                    ...this.state,
                    location:{
                    ...this.state.location, 
                    'Islamabad':!this.state.location.Islamabad
                }},()=>{
                    this.findCity(locationProps)
                   
                })
                break;

            case('Karachi'):
                this.setState({
                    ...this.state,
                    location:{
                    ...this.state.location, 
                    'Karachi':!this.state.location.Karachi
                }},()=>{
                    this.findCity(locationProps)
                
                })
                break;

            case('Peshawar'):
                this.setState({
                    ...this.state,
                    location:{
                    ...this.state.location, 
                    'Peshawar':!this.state.location.Peshawar
                }},()=>{
                    this.findCity(locationProps)
                   
                })
                break;
                
            default:
                this.setState({...this.state})
        }
      
    
        }

        getFromPrice(from){
            if(this.state.previousFromPrice === from){
                this.setState({
                    fromPrice : "",
                    previousFromPrice : "",
                    lastCheckedPrices : []
                },() => this.advancedSearch())
            }else{
                this.setState({
                    fromPrice :from,
                    previousFromPrice : from,
                    lastCheckedPrices :from
                })
            }   
         
           
        }

        getToPrice(to){
            let from = [...this.state.lastCheckedPrices]
            if(this.state.previousToPrice === to){
                this.setState({
                    toPrice : "",
                    previousToPrice : "",
                    lastCheckedPrices : []
                },() => this.advancedSearch())
            }else{
                this.setState({
                    previousToPrice : to,
                    toPrice:to,
                    lastCheckedPrices : from.concat(to)
                },()=>{
                    this.advancedSearch()
                
                })
            }   
           
          
         }

        toggleMenu(){
            let nav = document.querySelector("nav");
            let logo = document.querySelector(".logo");
            let search = document.querySelector("#search")
            let after = document.querySelector('div', '::before');
            if(this.state.isOpen === false){
                this.setState({
                    isOpen : true
                })
                nav.style.display = "block";
                logo.style.display = "none";
                search.style.display = "none";
                
            }else{
                this.setState({
                    isOpen: false
                })
                nav.style.display = "none";
                logo.style.display = "block";
                search.style.display = "flex";
            }
        }

       
       
    render(){
    return(
        
        
        <Fragment >
        <div id ="searchh">
        <Header></Header>
        <div className = {styles.wrapper}>  
        <div className = "slider" style = {{height:"100%",position:"relative",bottom:"20px"}}>
            <SlideShow></SlideShow>
        </div>
            {/* <div style = {{height:"300px",width:"90%"}}>
                
                <div className  ={styles.padding}>
                <h4 className= "search-property" style = {{fontFamily:"'Cinzel',serif",fontWeight:"500"}}> Search Property</h4>
                </div>
                
                
                <div className = {styles.search} id ="search">
                    
                    <SelectPropertyType getType = {(typeProps) => this.getType(typeProps)} ></SelectPropertyType>
                    
                    <SelectPropertyLocation getLocation = {(locationProps) => this.getLocation(locationProps)}/>
                    
                    <SelectPriceRange getFromPrice = {(from) => this.getFromPrice(from)}  getToPrice = {(to) => this.getToPrice(to)}></SelectPriceRange>
                    
                   
                    
                  </div>
                  
            </div> */}
            {/* <DisplayProperty  data = {this.array}  ></DisplayProperty>    */}
           
         </div>  
         {/* <div id = "featured"> 

             <h4 style = {{marginTop:"50px",fontFamily:"'Cinzel',serif",fontWeight:"500"}}>Featured Adds</h4>
         <Slider></Slider>
         </div> */}
         <h4 id = "contact" style = {{marginTop:"100px",marginBottom:"0",fontFamily:"'Cinzel',serif",fontWeight:"500"}}>Contact Us</h4>
         <div id = "contact-us"style = {{height:"400px",width:"100%",margin:"50px 0",marginBottom: "100px"}}>
             
            <MapContainer></MapContainer>
         </div>
         <div style = {{marginTop:"100px"}}>
         <Footer></Footer>
         </div>
         </div>
        </Fragment>
        )
    }
}
export default SearchProperty;

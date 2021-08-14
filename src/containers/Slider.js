import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import propertyOne from './slider/property_one.jpg'
import propertyTwo from './slider/property_two.jpg'
import propertyThree from './slider/property_three.jpg'
import propertyFour from './slider/property_four.jpg'
import propertyfive from './slider/property_five.jpg'

const Slider = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1300 },
      items: 4,
      partialVisibilityGutter: 40 // this is needed to tell the amount of px that should be visible.
    },
    tablet: {
      breakpoint: { max: 1300, min: 650 },
      items: 2,
      partialVisibilityGutter: 30 // this is needed to tell the amount of px that should be visible.
    },
    mobile: {
      breakpoint: { max: 650, min: 0 },
      items: 1,
      partialVisibilityGutter: 0 // this is needed to tell the amount of px that should be visible.
    }
  }
  
return(
<div style = {{width:"90%",margin:"0 5%"}}>
<Carousel
  
  responsive={responsive}
  swipeable={true}
  draggable={true}

>
  <img src={propertyOne} alt = "sad" style = {{height:"200px", width:"280px",margin:"0 auto"}}></img>
  <img src={propertyTwo} alt = "sad" style = {{height:"200px", width:"280px", margin:"0 auto"}}></img>
  <img src={propertyThree} alt = "sad" style = {{height:"200px", width:"280px", margin: "0 auto"}}></img>
  <img src={propertyFour} alt = "sad" style = {{height:"200px", width:"280px", margin:"0 auto"}}></img>
  <img src={propertyfive} alt = "sad" style = {{height:"200px", width:"280px", margin: "0 auto"}}></img>
  <img src={propertyfive} alt = "sad" style = {{height:"200px", width:"280px", margin: "0 auto"}}></img>
</Carousel>
</div>
)}

export default Slider;
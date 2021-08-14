import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@material-ui/core';
import aljalil from './slider/aljalil_bg.jpg';
import alnoor from './slider/alnoor_bg1.jpg';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { useHistory } from "react-router-dom";
function Item(props)
{
    let history = useHistory();
    return (
        <Paper >
            <img src = {props.item.image} style={{width:"100%",height:"100%",padding:"0"}} alt={props.item.content}></img>
            

            <Button className="CheckButton" onClick = {() => history.push(props.item.link )} style={{color:"white",background:"black",fontSize:"1rem",position:"relative",bottom:"calc(50% - 70px)",left:"0",width:"100%"}}>
                {props.item.content}
            </Button>
        </Paper>
    )
}

function SlideShow(){
  
        var items = [
            {
               image: aljalil,
               content: "Explore Al-Jalil Garden",
               link : '/aljalil',

            }, {
                image: alnoor,
                content: "Explore Al-Noor Garden",
                link : "/alnoor",
             },
           
        ]
    
        return (
            <Carousel
    NextIcon={<ArrowForwardIosIcon style = {{color:"white"}}/>}
    PrevIcon={<ArrowForwardIosIcon style = {{color:"white"}}/>}
    navButtonsAlwaysVisible = {true}
    fullHeightHover={false}
    indicators = {true}     
    navButtonsProps={{          
        style: {
            buttonWrapper: {
                position: "absolute",
                height: "100px",
                backgroundColor: "black",
                top: "calc(50% - 70px)",
                '&:hover': {
                    '& $button': {
                        backgroundColor: "black",
                        filter: "brightness(120%)",
                        opacity: "1"
                    }
                }
            },
            fullHeightHoverWrapper: {
                height: "100%",
                top: "0"
            },
            buttonVisible:{
                opacity: "1"
            },
            buttonHidden:{
                opacity: "0",
            },
            button: {
                margin: "0 10px",
                position: "relative",
                backgroundColor: "black",
                top: "calc(50% - 20px) !important",
                color: "white",
                fontSize: "30px",
                transition: "200ms",
                cursor: "pointer",
                '&:hover': {
                    opacity: "1 !important"
                },
            },
            // Applies to the "next" button wrapper
            next: {
                right: 0
            },
            // Applies to the "prev" button wrapper
            prev: {
                left: 0
            },
           
        }
           
        
    }} 
   
  
    >
                {
                    items.map( (item, i) => <Item key={i} item={item} /> )
                }
            </Carousel>
        )

}

export default SlideShow;
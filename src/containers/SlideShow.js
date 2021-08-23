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
            <img src = {props.item.image} style={{width:"100%",height:"100%",padding:window.innerWidth > 650 ? "0" : "57px 0 0 0"}} alt={props.item.content}></img>
            <h1 style = {{position:"relative",top:"0%",left:"5%",color:"black",fontSize:"2em",fontFamily:"'Cinzel',serif"}}>{props.item.heading}</h1>
            <p style = {{position:"relative",left:"5%", fontFamily: "'Quicksand',sans-serif"}}>{props.item.description}</p>
            <Button className="CheckButton" onClick = {() => history.push(props.item.link )} style={{color:"white",background:"#3f3d56",fontSize:"1rem",position:"relative",bottom:"50%",left:"5%",minWidth:"20%",opacity:"1", fontFamily:"'Cinzel',serif"}}>
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
               heading: "Al-Jalil Garden",
               description: "Al-Jalil Gardens started with a vision to empower the masses to lead an elevated and better lifestyle, Al-Jalil Developers has been continuously working towards providing innovative infrastructure solutions and improving the standard of living for Pakistanis."

            }, {
                image: alnoor,
                content: "Explore Al-Noor Garden",
                link : "/alnoor",
                heading: "Al-Noor Garden",
                description: "Al-Noor Orchard Housing Scheme is another most successful housing project of Al-Jalil Developers. It’s the largest LDA approved housing project of Lahore-West."
             },
           
        ]
    
        return (
            <Carousel
                autoPlay = {true}
                interval = {2000}
                animation = "fade"
                swipe = {true}
                
                navButtonsAlwaysVisible = {false}
                fullHeightHover={false}
                indicators = {false}     
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
                                    opacity: "0"
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
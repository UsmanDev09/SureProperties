

const Popup = (props) => {
    return (
        <div id = "pop-up" style = 
        {{position: "fixed", bottom:"0",zIndex:"100", display:props.display, width:"100vw", height:props.height, backgroundColor : "white",transition:"height 0.5s ease"}}>
            {props.list}
           
        </div>
    )
}
export default Popup;
import react from 'react';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


const Loading = () => {
    return(
        <Loader
            type="Bars"
            color="#eb282f"
            height={100}
            width={100}
            timeout={5000} //3 secs
            style = {{position:"fixed",top:"40%",left:"50%"}}
        />
    )
}

export default Loading;
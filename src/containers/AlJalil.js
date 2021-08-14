import React,{Fragment} from 'react';
import Header from '../containers/Header';
import Footer from '../containers/Footer';
import brouchure_one from '../containers/brouchers/aljalil_frontpage.png';
import brouchure_two from '../containers/brouchers/aljalil_backpage.png';
const AlJalil = () => {
    return(
        <Fragment>
       <Header/>
      
       <img src= {brouchure_one} style = {{width:"100%",height:"100%",padding:"0"}}></img>
       <img src= {brouchure_two} style = {{width:"100%",height:"100%",padding:"0"}}></img>

       <Footer/>
       </Fragment>
    )
}

export default AlJalil;
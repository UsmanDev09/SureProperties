import React,{Fragment} from 'react';
import Header from '../containers/Header';
import Footer from '../containers/Footer';
import brouchure_three from '../../src/brouchers/alnoor_frontpage.png';
import brouchure_four from '../../src/brouchers/alnoor_backpage.png';
const AlNoor = () => {
    return(
        <Fragment>
       <Header/>
      
       <img src= {brouchure_three} style = {{width:"100%",height:"100%",padding:"0"}}></img>
       <img src= {brouchure_four} style = {{width:"100%",height:"100%",padding:"0"}}></img>

       <Footer/>
       </Fragment>
    )
}

export default AlNoor;
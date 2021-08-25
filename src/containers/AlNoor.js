import React,{Fragment} from 'react';
import Header from '../containers/Header';
import Footer from '../containers/Footer';
import PropertyMap from './PropertyMap';

import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import styles from '../css/AlBari.module.css';

import alnoor from '../containers/slider/alnoor_bg.jpg';
import alnoor_video from '../containers/videos/alnoor.mkv'

import brouchure_three from '../../src/brouchers/alnoor_frontpage.png';
import brouchure_four from '../../src/brouchers/alnoor_backpage.png';

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: "#3f3d56",
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
  
  function createData( plotsize, totalprice, booking,  monthlyinstallments) {
    return {  plotsize, totalprice, booking,  monthlyinstallments };
  }
  
  const fourYearPaymentPlanRows = [
    createData(	"03-MARLA", 1750000, 200000, 12000),
    createData("05-MARLA",	2650000, 300000, 17000),
    createData("10-MARLA",	45000000, 500000, 30000),
    createData("01-KANAL",	7500000, 800000, 50000),
  ];

  
  
  
  const useStyles = makeStyles({
    table: {
      width: "100%",
    },
  });

const AlNoor = () => {

    const classes = useStyles();

    return(
        <Fragment>
            <Header/>
            
            <div style = {{background:"white"}}>
                <div style = {{position:"relative", height:"0", width: "100%", paddingBottom : "56.25%"}} >
                    <video  width= "100%" height = "500px" autoPlay loop muted = "muted"  style = {{position:"absolute", top:"0", left:"0", width:"100%", height:"auto"}}>
                    <source src={alnoor_video} type="video/mp4"></source>
                    </video>
                </div>
                <div style = {{width:"90%", margin:"8% 5%"}}>
                  <h1 style = {{fontFamily:"'Cinzel',serif", fontSize: "2em"}}>Al Jalil Garden Housing Scheme</h1>
                  <div className = {styles.albariDescription} style = {{display:"flex"}}>
                    <p style = {{marginRight:"80px", fontFamily: "'Quicksand', sans-serif", fontSize:"1.1em"}}>Al-Noor Orchard Housing Scheme is another most successful housing project of Al-Jalil Developers. It’s the largest LDA approved housing project of Lahore-West. It’s serene; It’s beautiful, and, more importantly, it’s equipped with all the amenities of modern life. No doubt, it’s the place where you can experience the lifestyle of your dreams.</p>
                    <img src = {alnoor} className = {styles.albariImage} style = {{padding:"0"}} alt = "albari" ></img>
                  </div>
                </div>

              <div style = {{width:"90%",margin:"0 5%", position: "relative"}}>
                <h1 style = {{fontFamily:"'Cinzel',serif", fontSize: "2em"}}>Al-Noor Orchard Housing Scheme 5 Years Pricing Plan</h1>
                <TableContainer component={Paper}>
                  <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                      <TableRow>
                        <StyledTableCell align="center">Plot Size</StyledTableCell>
                        <StyledTableCell align="center">Total Price</StyledTableCell>
                        <StyledTableCell align="center">Booking From</StyledTableCell>
                        <StyledTableCell align="center">(30) Monthly Installments</StyledTableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {fourYearPaymentPlanRows.map((row) => (
                        <StyledTableRow key={row.ratepermarla}>
                          <StyledTableCell align="center">{row.plotsize}</StyledTableCell>
                          <StyledTableCell align="center">{row.totalprice}</StyledTableCell>
                          <StyledTableCell align="center">{row.booking}</StyledTableCell>
                          <StyledTableCell align="center">{row.monthlyinstallments}</StyledTableCell>
                        </StyledTableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
              <div>
              <div style = {{margin: "8% 0", width:"90%", height:"500px"}}>
                <h1 style = {{fontFamily:"'Cinzel',serif", fontSize: "2em", margin: "2% 5%"}}>Location</h1>
                <PropertyMap latitude= "31.560459650870218"  longitude =  "74.18137033047662"></PropertyMap>
              </div>
              </div>
              
            </div>
            <Footer/>
       </Fragment>
    )
}

export default AlNoor;
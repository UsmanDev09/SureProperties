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

import aljalil from '../containers/slider/aljalil_bg1.jpg';
import aljalil_video from '../containers/videos/aljalil.mp4'


import brouchure_one from '../../src/brouchers/aljalil_frontpage.png';
import brouchure_two from '../../src/brouchers/aljalil_backpage.png';

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
  
  function createData(ratepermarla, plotsize, totalprice, booking, balloting, possession, monthlyinstallments, aftersixmonths) {
    return { ratepermarla, plotsize, totalprice, booking, balloting, possession, monthlyinstallments, aftersixmonths };
  }
  
  const preLaunchRows = [
    createData(600000,	"05-MARLA", 2800000,	560000,	280000,	280000, 28000, 140000),
    createData(550000,	"8-MARLA",	3800000,	760000,	380000,	380000,	38000,	190000),
    createData(500000,	"10-MARLA",	50000000,	1000000,	500000,	500000,	500000,	250000),
    createData(450000,	"01-KANAL",	9000000,	1800000,	90000,	900000,	900000,	450000),
  ];
  
  
  const useStyles = makeStyles({
    table: {
      width: "100%",
    },
  });

const AlJalil = () => {
    
    const classes = useStyles();

    return(
        <React.Fragment>
          <Header/>
            <div style = {{background:"white"}}>
                <div style = {{position:"relative", height:"0", width: "100%", paddingBottom : "56.25%"}}>
                    <video  width= "100%" height = "500px" autoPlay loop muted = "muted" style = {{position:"absolute", top:"0", left:"0", width:"100%", height:"auto"}} >
                    <source src={aljalil_video} type="video/mp4"></source>
                    </video>
                </div>
                <div style = {{width:"90%", margin:"8% 5%", position:"relative"}}>
                  <h1 style = {{fontFamily:"'Cinzel',serif", fontSize: "2em"}}>Al Jalil Garden Housing Scheme</h1>
                  <div className = {styles.albariDescription} style = {{display:"flex"}}>
                    <p style = {{marginRight:"80px", fontFamily: "'Quicksand', sans-serif", fontSize:"1.1em"}}>Al-Jalil Garden envisaged as a premium housing community provides affordable living in the most ideal location. It lies a short 8-minute drive from Lahore District Court and Thokar Niaz Baig, and a mere 1.5-kilometre drive from the Ravi Toll Plaza, M-2 Motorway.
                        The project’s address is simply perfect. It spans grandly over several hundred acres of land on main Jaranwala/Sharaqpur Road opposite the M-2 Motorway’s Main Faizpur Interchange. Compared to many posh housing projects located in the vicinity, Al Jalil Garden is far more accessible. Multiple upcoming governmental developments, such as a mega Disney Land theme park and the Lahore-to-Karachi Motorway, are being developed nearby.
                        Al Jalil Garden is an immaculate housing society that has been perfectly designed keeping in mind the changing seasons and the techniques of optimum space utilization. Each architectural design decision has been given the utmost thought. The project features beautifully landscaped, expansive open areas with winding walkways, and the vicinity is dotted with lush greenbelts, remarkable family parks and majestic gardens.</p>
                    <img src = {aljalil} className = {styles.albariImage} style = {{padding:"0"}} alt = "albari" ></img>
                  </div>
                </div>

              <div style = {{width:"90%",margin:"0 5%"}}>
                <h1 style = {{fontFamily:"'Cinzel',serif", fontSize: "2em"}}>Al-Jalil Housing Scheme 3 Years Pricing Plan</h1>
                <TableContainer component={Paper}>
                  <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                      <TableRow>
                        <StyledTableCell>Rate/Marla</StyledTableCell>
                        <StyledTableCell align="right">Plot Size</StyledTableCell>
                        <StyledTableCell align="right">Total Price</StyledTableCell>
                        <StyledTableCell align="right">Booking 10%</StyledTableCell>
                        <StyledTableCell>Balloting 10%</StyledTableCell>
                        <StyledTableCell align="right">Possession 10%</StyledTableCell>
                        <StyledTableCell align="right">(30) Monthly Installments</StyledTableCell>
                        <StyledTableCell align="right">After every 6 months</StyledTableCell>
                    
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {preLaunchRows.map((row) => (
                        <StyledTableRow key={row.ratepermarla}>
                          <StyledTableCell component="th" scope="row">
                            {row.ratepermarla}
                          </StyledTableCell>
                          <StyledTableCell align="center">{row.plotsize}</StyledTableCell>
                          <StyledTableCell align="center">{row.totalprice}</StyledTableCell>
                          <StyledTableCell align="center">{row.booking}</StyledTableCell>
                          <StyledTableCell align="center">{row.balloting}</StyledTableCell>
                          <StyledTableCell align="center">{row.possession}</StyledTableCell>
                          <StyledTableCell align="center">{row.monthlyinstallments}</StyledTableCell>
                          <StyledTableCell align="center">{row.aftersixmonths}</StyledTableCell>
                        </StyledTableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
              <div>
              <div style = {{margin: "8% 0", width:"90%", height:"500px"}}>
                <h1 style = {{fontFamily:"'Cinzel',serif", fontSize: "2em", margin: "2% 5%"}}>Location</h1>
                <PropertyMap latitude= "31.59224065520604"  longitude =  "74.21418868465675"></PropertyMap>
              </div>
              </div>
              
            </div>
            <Footer/>
        </React.Fragment>
        
    )
}


export default AlJalil;
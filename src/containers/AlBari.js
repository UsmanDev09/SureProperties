import React, {Fragment} from 'react';
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

import albari from '../containers/videos/albari.mp4';
import albari_pic from '../containers/slider/albari_pic.jpg'


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
  
  function createData(ratepermarla, plotsize, totalprice, booking, confirmation,balloting, possession, monthlyinstallments, aftersixmonths) {
    return { ratepermarla, plotsize, totalprice, booking, confirmation, balloting, possession, monthlyinstallments, aftersixmonths };
  }
  
  const preLaunchRows = [
    createData(650000 ,	"03-MARLA",	1950000,	195000,	195000,	292500,	292500,	19500,	97500),
    createData(600000,	"05-MARLA", 3000000,	300000,	300000,	450000,	450000,	30000, 150000),
    createData(550000,	"10-MARLA",	5500000,	550000,	550000,	825000,	825000,	55000,	275000),
    createData(500000,	"01-KANAL",	10000000,	1000000,	1000000,	1500000,	1500000,	100000,	500000),
    createData(450000,	"02-KANAL",	18000000,	1800000,	1800000,	2700000,	2700000,	180000,	900000),
  ];
  
  const launchRows = [
    createData(700000,	"03-MARLA",	2100000,	210000,	210000,	315000,	315000,	21000,	105000),
    createData(650000,	"5-MARLA",	3250000,	325000,	325000,	487000,	487000,	32500,	162500),
    createData(600000,	"10-MARLA",	6000000,	600000,	600000,	900000,	900000,	60000,	300000),
    createData(550000,	"01-KANAL",	11000000,	1100000,	1100000,	1650000,	1650000,	110000,	550000),
    createData(500000,	"02-KANAL",	20000000,	2000000,	2000000,	3000000,	3000000,	200000,	1000000),
  ];

  const useStyles = makeStyles({
    table: {
      width: "100%",
    },
  });

const AlBari = () => {
    const classes = useStyles();

    return(
        <React.Fragment>
          <Header/>
            <div style = {{background:"white"}}>
              <div style = {{position:"relative", height:"0", width: "100%", paddingBottom : "56.25%"}}>
                <video  width= "100%" height = "500px" autoPlay loop muted = "muted" style = {{position:"absolute", top:"0", left:"0", width:"100%", height:"auto"}}>
                <source src={albari} type="video/mp4"></source>
                </video>
              </div>
              <div style = {{width:"90%", margin:"8% 5%", position:"relative"}}>
                  <h1 style = {{fontFamily:"'Cinzel',serif", fontSize: "2em"}}>Al Bari Residencia</h1>
                  <div className = {styles.albariDescription} style = {{display:"flex"}}>
                    <p style = {{marginRight:"80px", fontFamily: "'Quicksand', sans-serif", fontSize:"1.1em"}}>Al-Baari Residencia is a premium housing enterprise of Al-Jalil Developers that has been built on the concept of a master-planned residential community. Located a few minutes’ drive from Batti Chowk & nestled in close proximity to Sheikhupura Interchange on Motorway, the housing scheme is an amazing place for those who truly want to experience the richness of life.
                        The housing scheme has been creatively designed to provide all the comforts of life to its residents in the most convenient way possible. It’s a secure gated community that’s 24/7 under the watch of professional & trained security guards. Its landscape has been dotted with long stretches of green belts to provide a nature-friendly environment. Its ambiance is alluring and its architecture is breathtaking to watch! It’s equipped with top-class infrastructure & has all the constituents of what constitutes a luxurious life.
                        Al-Baari Residencia is a rich contribution of Al-Jalil Developers towards the housing sector in Pakistan. Its payment plan is affordable. Its lifestyle is unmatchable. No doubt, the housing scheme has raised the bar for housing societies across Pakistan and has turned out to be the leading template for others to follow.</p>
                    <img src = {albari_pic} className = {styles.albariImage} style = {{padding:"0"}} alt = "albari" ></img>
                  </div>
              </div>

              <div style = {{width:"90%",margin:"0 5%"}}>
                <h1 style = {{fontFamily:"'Cinzel',serif", fontSize: "2em"}}>Al-Bari Resendencia Pre Launch Pricing Plan</h1>
                <TableContainer component={Paper}>
                  <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                      <TableRow>
                        <StyledTableCell>Rate/Marla</StyledTableCell>
                        <StyledTableCell align="right">Plot Size</StyledTableCell>
                        <StyledTableCell align="right">Total Price</StyledTableCell>
                        <StyledTableCell align="right">Booking 10%</StyledTableCell>
                        <StyledTableCell align="right">Confirmation 10%</StyledTableCell>
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
                          <StyledTableCell align="center">{row.confirmation}</StyledTableCell>
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
              
              <div style = {{width:"90%",margin:"8% 5% 8% 5%"}}>
                <h1 style = {{fontFamily:"'Cinzel',serif", fontSize: "2em"}}>Al-Bari Resendencia Launch Pricing Plan</h1>
                <TableContainer component={Paper}>
                  <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                      <TableRow>
                        <StyledTableCell>Rate/Marla</StyledTableCell>
                        <StyledTableCell align="right">Plot Size</StyledTableCell>
                        <StyledTableCell align="right">Total Price</StyledTableCell>
                        <StyledTableCell align="right">Booking 10%</StyledTableCell>
                        <StyledTableCell align="right">Confirmation 10%</StyledTableCell>
                        <StyledTableCell>Balloting 10%</StyledTableCell>
                        <StyledTableCell align="right">Possession 10%</StyledTableCell>
                        <StyledTableCell align="right">(30) Monthly Installments</StyledTableCell>
                        <StyledTableCell align="right">After every 6 months</StyledTableCell>
                    
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {launchRows.map((row) => (
                        <StyledTableRow key={row.ratepermarla}>
                          <StyledTableCell component="th" scope="row">
                            {row.ratepermarla}
                          </StyledTableCell>
                          <StyledTableCell align="center">{row.plotsize}</StyledTableCell>
                          <StyledTableCell align="center">{row.totalprice}</StyledTableCell>
                          <StyledTableCell align="center">{row.booking}</StyledTableCell>
                          <StyledTableCell align="center">{row.confirmation}</StyledTableCell>
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
            </div>
            <Footer/>
        </React.Fragment>
        
    )
}

export default AlBari;
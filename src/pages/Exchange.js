import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import fire from "../Firebase"
import "./styles.css"

export default class Exchange extends Component {
  render() {
      const handleClick = async () => {
        try {
          await fire.auth().signOut();
          // signed out
        } catch (e){
         // an error
        } 
      }
    return (
      <div>
        <Navbar />
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ minHeight: "40vh" }}
        >
          <Grid item xs={3}></Grid>
          <h2 className="exchange-h2">Connect To Exchange</h2>
          <h4 className="exchange-h4">Please connect your exchange account to our app</h4>
          <button className="btn-logout" onClick={handleClick}>Logout</button>
        </Grid>
        <Footer/>
      </div>
    );
  }
}

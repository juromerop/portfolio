import React from "react";
import "../styles/Hello.css";
import Grid from "@mui/material/Unstable_Grid2";
import { Container } from "@mui/system";
import Image from "mui-image";
import mainPhoto from "../images/main.png";

function Hello() {
  return (
    <>
      <Container maxWidth="lg" className="container">
        <Grid container spacing={3} className="grid">
          <Grid item xs className="HeyItem">
            <h1>Hey!</h1>
            <h3>
              I'm <span className="name">Juan Garzon</span>.
            </h3>
            <h4>Front End developer</h4>
          </Grid>
          <Grid item xs={6}>
            <Image
              className="mainPhoto"
              src={mainPhoto}
              alt="Juan Garzon"
              aspectRatio={1}
              color="#000"
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Hello;

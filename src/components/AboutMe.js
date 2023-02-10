import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { Container } from "@mui/system";
import "../styles/AboutMe.css";
import PhotoAboutMe from "./PhotoAboutMe";
import InformationAboutMe from "./InformationAboutMe";

function AboutMe() {
  return (
    <Container maxWidth="lg" className="aboutcontainer">
      <Grid container spacing={3} maxWidth="100%" className='aboutgrid'>
        <Grid md={12}>
          <PhotoAboutMe />
        </Grid>
        <Grid md={6}>
          <InformationAboutMe />
        </Grid>
      </Grid>
    </Container>
  );
}

export default AboutMe;

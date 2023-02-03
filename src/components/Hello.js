import React from "react";
import "../styles/Hello.css";
import Grid from "@mui/material/Unstable_Grid2";
import { Container } from "@mui/system";

function Hello() {
  return (
    <>
      <Container maxWidth="lg" className="container">
        <Grid xs={8} className="grid">
          <h1>Hey!</h1>
          <h3>
            I'm <span className="name">Juan Garzon</span>.
          </h3>
          <h4>Front End developer</h4>
        </Grid>
      </Container>
    </>
  );
}

export default Hello;

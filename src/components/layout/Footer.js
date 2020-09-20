import React from "react";
import styled from "styled-components";


//react router imports
import { Link } from "react-router-dom";

//material-ui imports
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import HeadsetMicIcon from "@material-ui/icons/HeadsetMic";
import InfoIcon from "@material-ui/icons/Info";
import AddIcon from "@material-ui/icons/Add";

const Container = styled.div`
  text-align: center;
`;

const Footer = () => {
  return (
    <Container>
      <Grid container spacing={0}>
        <Grid items xs={4}>
          <Button variant="contained" startIcon={<InfoIcon />}>
            <Link to="/about">ABOUT</Link>
          </Button>
        </Grid>
        <Grid items xs={4}>
          <Button variant="contained" startIcon={<AddIcon />}>
            <Link to="/invite">INVITE</Link>
          </Button>
        </Grid>
        <Grid items xs={4}>
          <Button variant="contained" startIcon={<HeadsetMicIcon />}>
            <Link to="/support">SUPPORT</Link>
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Footer;

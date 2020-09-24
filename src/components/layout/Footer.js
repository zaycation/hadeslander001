import React from "react";
import styled from "styled-components";

//react router imports
import { Link } from "react-router-dom";

//material-ui imports
import Grid from "@material-ui/core/Grid";

//evergreen imports
import { Button, ApplicationsIcon, CubeAddIcon, HelpIcon } from 'evergreen-ui';

const Container = styled.div`
  text-align: center;
`;

const Footer = () => {
  return (
    <Container>
      <Grid container spacing={0}>
        <Grid items xs={4}>
          <Button height={40} appearance="primary" iconBefore={ApplicationsIcon} is="Link">
            <Link to="/about">ABOUT</Link>
          </Button>
        </Grid>
        <Grid items xs={4}>
        <Button height={40} appearance="primary" iconBefore={CubeAddIcon} is="Link">
            <Link to="/invite">INVITE</Link>
          </Button>
        </Grid>
        <Grid items xs={4}>
        <Button height={40} appearance="primary" iconBefore={HelpIcon} is="Link">
            <Link to="/support">SUPPORT</Link>
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Footer;

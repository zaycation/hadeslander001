import React from "react";
import styled from "styled-components";

//react router imports
// import { Link } from "react-router-dom";

//material-ui imports
import Grid from "@material-ui/core/Grid";

//evergreen imports
import { Button, ApplicationsIcon, CubeAddIcon, HeadsetIcon } from 'evergreen-ui';

const Container = styled.div`
  text-align: center;
`;

const Footer = () => {
  return (
    <Container>
      <Grid container spacing={0}>
        <Grid items xs={4}>
          <Button height={40} appearance="primary" intent="danger" iconBefore={ApplicationsIcon} is="Link">
            {/*<Link to="/about">ABOUT</Link>*/}
            ABOUT
          </Button>
        </Grid>
        <Grid items xs={4}>
        <Button height={40} appearance="primary" intent="danger" iconBefore={CubeAddIcon} is="Link">
            {/*<Link to="/invite">INVITE</Link>*/}
            INVITE
          </Button>
        </Grid>
        <Grid items xs={4}>
        <Button height={40} appearance="primary" intent="danger" iconBefore={HeadsetIcon} is="Link">
            {/*<Link to="/support">SUPPORT</Link>*/}
            SUPPORT
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Footer;

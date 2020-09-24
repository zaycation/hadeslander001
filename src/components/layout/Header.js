import React from "react";
import styled from "styled-components";

//react router imports

//material-ui imports
import Grid from "@material-ui/core/Grid";

//evergreen imports
import { Button } from "evergreen-ui";

const Container = styled.div`
  text-align: center;
`;

const Header = () => {
  return (
    <Container>
      <Grid container spacing={0}>
        <Grid items xs={6}>
          <Button height={20} appearance="default" intent="danger" is="Link">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/zaycation/hadesbot002"
            >
              SRC CODE
            </a>
          </Button>
        </Grid>
        <Grid items xs={6}>
          <Button height={20} appearance="default" intent="danger" is="Link">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:support@zaycation.dev"
            >
              REPORT BUGS
            </a>
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Header;

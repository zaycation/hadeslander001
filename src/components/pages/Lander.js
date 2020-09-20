import React from "react";

//material-ui imports
import Grid from "@material-ui/core/Grid";
import Box from '@material-ui/core/Box';

const Lander = () => {
  return (
    <div>
      <Grid container spacing={0}>
        <Grid items xs={7}>
        <Box component="span" m={1} color="text.primary">
            <h3>
              The simple, lightweight bot every server needs. Add for
              moderation, fun games, music, and more coming soon! Currently in
              alpha testing.
            </h3>
        </Box>

        </Grid>
        <Grid item xs={5}>
          <h1>HADES</h1>
        </Grid>
      </Grid>
    </div>
  );
};

export default Lander;

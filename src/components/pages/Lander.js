import React from "react";

//material-ui imports
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

const Lander = () => {
  return (
    <div>
      <Grid container spacing={0}>
        <Grid items xs={1}></Grid>
        <Grid items xs={5}>
          <Box component="span" m={0} color="text.primary">
            <img
              className="cmdlist"
              alt="Hades Command List"
              src="https://i.imgur.com/jVBXhjl.png"
            />
          </Box>
        </Grid>
        <Grid item xs={5}>
          <img
            className="hadesicon"
            alt="Hades Icon"
            src="https://i.imgur.com/CTnqERH.png"
          />
        </Grid>
        <Grid items xs={1}></Grid>
      </Grid>
    </div>
  );
};

export default Lander;

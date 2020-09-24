import React from "react";

//material-ui imports
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

//evergreen imports

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
      <Grid container spacing={0}>
        <Grid items xs={2}></Grid>
        <Grid items xs={8}>
          <h1>
            HADES DISCORD BOT
          </h1>
          <p>
            Hades [Ἁιδης] is a darknet and crypto bot. Add Hades to your server
            to get awesome updates and never stay out of the loop!
          </p>
        </Grid>
        <Grid items xs={2}></Grid>
      </Grid>
    </div>
  );
};

export default Lander;

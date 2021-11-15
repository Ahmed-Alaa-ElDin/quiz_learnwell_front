import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import QuestionButton from "./QuestionButton";

export default function QuestionsList({ toggleDrawer, open }) {
  return (
    <div>
      <SwipeableDrawer
        open={open}
        onClose={(e) => toggleDrawer(false, e)}
        onOpen={(e) => toggleDrawer(true, e)}
      >
        <Box
          sx={{ width: 300 }}
          role="presentation"
          onClick={(e) => toggleDrawer(false, e)}
          onKeyDown={(e) => toggleDrawer(false, e)}
        >
          <Typography variant="h6" align="center" sx={{ my: 1 }}>
            Questions List
          </Typography>
          <Divider />
          <Grid container spacing={0} padding={2}>
            {[
              "1",
              "2",
              "3",
              "4",
              "5",
              "6",
              "7",
              "8",
              "9",
              "10",
              "11",
              "12",
              "13",
              "14",
              "15",
            ].map((number, index) => (
              <Grid item sm={2} key={index} margin={0.5}>
                <QuestionButton
                  number={number}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </SwipeableDrawer>
    </div>
  );
}

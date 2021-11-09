import { AppBar, Card, Toolbar } from "@mui/material";
import React from "react";

function UserDetails() {
  return (
    <AppBar
      sx={{
        mt: 6,
        backgroundColor: "primary",
        fontWeight: "bold",
        fontSize: "0.9rem",
      }}
      elevation={1}
    >
      <Toolbar
        variant="dense"
        display="flex"
        sx={{
          justifyItems: "center",
          justifyContent: "space-between",
          columnGap: "20px",
        }}
      >
        <Card
          elevation={0}
          sx={{
            padding: "2px 10px",
            backgroundColor: "primary.light",
            flexGrow: "2",
            textAlign: "center",
          }}
        >
          Ahmed Alaa El Din Hassan
        </Card>
        <Card
          elevation={0}
          sx={{
            padding: "2px 10px",
            backgroundColor: "primary.light",
            flexGrow: "1",
            textAlign: "center",
          }}
        >
          10006943
        </Card>

        <Card
          elevation={0}
          sx={{
            padding: "2px 10px",
            backgroundColor: "primary.light",
            flexGrow: "1",
            textAlign: "center",
            color: "warning.light",
          }}
        >
          - 00:59:59
        </Card>
      </Toolbar>
    </AppBar>
  );
}

export default UserDetails;

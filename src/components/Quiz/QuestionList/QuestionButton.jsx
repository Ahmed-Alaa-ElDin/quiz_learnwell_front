import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function QuestionButton({ number }) {
  return (
    <>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Button
          variant="contained"
          sx={{
            minWidth: "0",
            width: "45px",
            backgroundColor: "#274452",
            "&:hover": {
              backgroundColor: "#43697b",
            },
          }}
        >
          {number}
        </Button>
      </Link>
    </>
  );
}

export default QuestionButton;

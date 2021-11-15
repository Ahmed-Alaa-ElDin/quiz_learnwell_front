import CssBaseline from "@mui/material/CssBaseline";
import { Box } from "@mui/system";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
} from "react-router-dom";
import SelectOneWO from "./SelectOneWO/SelectOneWO";
import BottomNav from "./BottomNav/BottomNav";
import Header from "./Header/Header";
import QuestionsList from "./QuestionList/QuestionsList";
import UserDetails from "./UserDetails/UserDetails";

// import Data from "../../data/SelectOneWOData.json"

// Primary Color : #274452

function Quiz() {
  const [open, setOpen] = React.useState(false);
  const [questions, setQuestions] = React.useState();

  const toggleDrawer = (open, event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpen(open);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Header toggleDrawer={toggleDrawer} />
      <UserDetails />
      <QuestionsList toggleDrawer={toggleDrawer} open={open} />
      <Router>
        {/* <Switch> */}
        <Routes>
          <Route exact path="/quiz/:id">
            <SelectOneWO />
          </Route>
        </Routes>
        {/* </Switch> */}
        {/* {Data.map((question) => (
          <SelectOneWO question={question} key={question.id} />
        ))} */}
      </Router>
      <BottomNav />
    </Box>
  );
}

export default Quiz;

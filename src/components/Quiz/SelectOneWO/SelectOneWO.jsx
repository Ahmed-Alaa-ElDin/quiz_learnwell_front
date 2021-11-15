import {
  Card,
  Container,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React from "react";
import { useParams } from "react-router";

function SelectOneWO() {
    const {id} = useParams();
    
    console.log(id);

  //   return (
  //   <Container sx={{ mt: 12, mb: 8 }}>
  //     <Card sx={{ backgroundColor: "primary.light", my: 3, p: 2 }}>
  //       <Typography fontWeight="bold" variant="subtitle1" align="center">
  //         {question.question}
  //       </Typography>
  //     </Card>

  //     <FormControl fullWidth>
  //       <RadioGroup
  //         aria-label="gender"
  //         defaultValue="female"
  //         name="radio-buttons-group"
  //         sx={{
  //           ".MuiFormControlLabel-root": { width: "100%", marginLeft: "auto" },
  //           ".MuiRadio-root": { display: "none" },
  //           ".MuiTypography-root": {
  //             width: "100%",
  //             backgroundColor: "primary.light",
  //             p: 1,
  //             borderRadius: 2,
  //           },
  //           ".Mui-checked+span": {
  //             backgroundColor: "primary.main",
  //             color: "#fff",
  //             fontWeight: "bold",
  //           },
  //         }}
  //       >
  //         <Grid container spacing={2}>
  //           {question.answers.map((answer, i) => (
  //             <Grid item xs={6} key={answer.id}>
  //               <FormControlLabel
  //                 value={answer.id}
  //                 control={<Radio />}
  //                 label={
  //                   <Typography
  //                     variant="subtitle1"
  //                     align="center"
  //                     component="span"
  //                   >
  //                     {answer.text}
  //                   </Typography>
  //                 }
  //               />
  //             </Grid>
  //           ))}
  //         </Grid>
  //       </RadioGroup>
  //     </FormControl>
  //   </Container>
  // );
}

export default SelectOneWO;

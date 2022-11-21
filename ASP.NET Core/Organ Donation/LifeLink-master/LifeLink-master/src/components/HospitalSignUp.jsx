import React, { useState,useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { postData } from "../FetchServices";
import Alert from '@mui/material/Alert';


const theme = createTheme();

export const HospitalSignUp = (props) => {

  const [inputValues, setInputValues] = useState({
    hospitalName: '',hospitalEmail: '', hospitalNo:'',hospitalRegistrationNo:'',hospitalAddress:'',hospitalPassword:''
  });
  const [styleValue,setStyleValue]=useState({display:"none",server:"error",text:"Registration Falied! Something Went Wrong"})

  
  useEffect(() => {

  }, []);

  const handleOnChange = event => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const handleSubmit =async (event) => {
    event.preventDefault();
   
    console.log(inputValues);
    let body={
        'HospitalName':inputValues.hospitalName,
        'HospitalEmail':inputValues.hospitalEmail,
        'HospitalNo':inputValues.hospitalNo,
        'HospitalRegistrationNo':inputValues.hospitalRegistrationNo,
        'HospitalAddress':inputValues.hospitalAddress,
        'HospitalPassword':inputValues.hospitalPassword
     }
     console.log("body",body);
     let result=await postData('Hospital/HospitalRegistration',body)
     console.log("result",result);
      if(result.length)
      {
       console.log('data recived successfully') 
       setStyleValue({ ...styleValue, display: 'block',server:'success',text:"Hospital Registration Complete Succesfully. Now Go on Login Page"});

       setTimeout(() => {
        window.location="/HospitalSignIn"
      }, 5000);
          
      }
      else{
        console.log('data not recieved ')
        setInputValues({ ...inputValues, hospitalName: '',hospitalEmail:'',hospitalNo:'', hospitalRegistrationNo:'',hospitalAddress:'',hospitalPassword:''});
        setStyleValue({ ...styleValue, display: 'block'}); 
    }
  };


  
    return (
      <ThemeProvider theme={theme}>
        <Grid container component="main" sx={{ height: "80vh" }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={6}
            sx={{
              backgroundImage: "url(img/DonationHospital.jpg)",
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "dark"
                  ? t.palette.grey[30]
                  : t.palette.grey[400],
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <Grid
            item
            xs={10}
            sm={6}
            md={6}
            component={Paper}
            elevation={6}
            square
          >
            <Box
              sx={{
                m: 8,
                my: 12,
                mx: 6,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Hospital Sign Up
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 3 }}
              >
              <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <TextField
                  autoComplete="given-name"
                  name="hospitalName"
                  required
                  fullWidth
                  onChange={handleOnChange}
                  value={inputValues.hospitalName}
                  id="hospitalName"
                  label="Hospital Name"
                  autoFocus
                />
              </Grid>             
                <Grid item xs={12} sm={6}>
                <TextField
                margin="normal"
                required
                fullWidth
                type="number"
                onChange={handleOnChange}
                value={inputValues.hospitalNo}
                id="hospitalNo"
                label="Enter Contact No"
                name="hospitalNo"
                autoComplete="number"
                autoFocus
              />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  type="email"
                  onChange={handleOnChange}
                  value={inputValues.hospitalEmail}
                  id="hospitalEmail"
                  label="Enter Email Address"
                  name="hospitalEmail"
                  autoComplete="email"
                  autoFocus
                />
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  onChange={handleOnChange}
                  value={inputValues.hospitalRegistrationNo}
                  id="hospitalRegistrationNo"
                  label="Enter Registration No"
                  name="hospitalRegistrationNo"
                  autoComplete="donarDateOfBirth"
                  autoFocus
                />
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField
              margin="normal"
              required
              fullWidth
              onChange={handleOnChange}
              value={inputValues.hospitalAddress}
              id="hospitalAddress"
              label="Enter Address"
              name="hospitalAddress"
              autoComplete="address"
              autoFocus
            />
                </Grid>
                
                </Grid>
              
              
                
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  onChange={handleOnChange}
              value={inputValues.hospitalPassword}
                  name="hospitalPassword"
                  label="Password"
                  type="password"
                  id="hospitalPassword"
                  autoComplete="current-password"
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign Up
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="/HospitalSignIn" variant="body2">
                      {"If You have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
              <Alert variant="outlined" severity={styleValue.server} style={{display:styleValue.display}}>
              {styleValue.text}
            </Alert>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    )
};

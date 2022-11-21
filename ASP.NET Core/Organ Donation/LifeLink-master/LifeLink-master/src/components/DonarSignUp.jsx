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
import { postData,getData } from "../FetchServices";
import Alert from '@mui/material/Alert';
import { MenuItem } from "@material-ui/core";


const theme = createTheme();

export const DonarSignUp = (props) => {


  const [hospitalList, setHospitalList] = useState([]);
  const [inputValues, setInputValues] = useState({
    donarFirstName:'',donarLastName:'', donarEmail:'', donarNo:'',donarDateOfBirth:'',donarGender:'',donarAdhaar:'',donarAddress:'',hospitalId:'',donarPassword:''
  });
  const [styleValue,setStyleValue]=useState({display:"none",server:"error",text:"Registration Failed! Something went Wrong"})

  
  useEffect(() => {
    fetchData()
  }, []);

  const fetchData =async ()=> {
   
    let result=await getData('Hospital/GetAllHospitalList')
    console.log("result for Hospital List",result);
     if(result.length)
     {
       setHospitalList(result);
      console.log('data recived successfully')
     //  this.props.navigation.navigate('login')     
     }
     else{
       console.log('data not recieved ')
     }  
     }
  const handleOnChange = event => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const handleSubmit =async (event) => {
    event.preventDefault();
   
    console.log(inputValues);
    let body={
        'DonarName':inputValues.donarFirstName+' '+inputValues.donarLastName,
        'DonarEmail':inputValues.donarEmail,
        'DonarNo':inputValues.donarNo,
        'DonarDateOfBirth':inputValues.donarDateOfBirth,
        'DonarGender':inputValues.donarGender,
        'DonarAdhaar':inputValues.donarAdhaar,
        'DonarAddress':inputValues.donarAddress,
        'HospitalId':inputValues.hospitalId,
        'DonarPassword':inputValues.donarPassword
     }
     console.log("body",body);
     let result=await postData('Donar/DonarRegistration',body)
     console.log("result",result);
      if(result.length)
      {
       console.log('data recived successfully')
       setStyleValue({ ...styleValue, display: 'block',server:'success',text:"Donar Registration Complete Succesfully. Now Go on Login Page"});

      setTimeout(() => {
        window.location="/DonarSignIn"
     }, 5000);

      // this.props.navigation.navigate('login')     
      }
      else{
        console.log('data not recieved ')
        setInputValues({ ...inputValues, donarEmail: '',donarPassword:'' });
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
            sm={5}
            md={6}
            sx={{
              backgroundImage: "url(img/organDonation.jpg)",
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
            xs={8}
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
                Donar Sign Up
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 3 }}
              >
              <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="donarFirstName"
                  required
                  fullWidth
                  onChange={handleOnChange}
                  value={inputValues.donarFirstName}
                  id="donarFirstName"
                  label="Enter First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  onChange={handleOnChange}
                  value={inputValues.donarLastName}
                  id="donarLastName"
                  label="Enter Last Name"
                  name="donarLastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  onChange={handleOnChange}
                  value={inputValues.donarEmail}
                  id="donarEmail"
                  label="Email Address"
                  name="donarEmail"
                  autoComplete="email"
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
                value={inputValues.donarNo}
                id="donarNo"
                label="Enter Contact No"
                name="donarNo"
                autoComplete="number"
                autoFocus
              />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  type="date"
                  onChange={handleOnChange}
                  value={inputValues.donarDateOfBirth}
                  id="donarDateOfBirth"
                  label="Enter Date of birth"
                  name="donarDateOfBirth"
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
                  value={inputValues.donarGender}
                  id="donarGender"
                  label="Enter Gender"
                  name="donarGender"
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
                type="number"
                value={inputValues.donarAdhaar}
                id="donarAdhaar"
                label="Enter Adhaar Number"
                name="donarAdhaar"
                autoComplete="donarAdhaar"
                autoFocus
              />
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField
              margin="normal"
              required
              fullWidth
              onChange={handleOnChange}
              value={inputValues.donarAddress}
              id="donarAddress"
              label="Enter Address"
              name="donarAddress"
              autoComplete="donarDateOfBirth"
              autoFocus
            />
            </Grid>
            
            <Grid item xs={12} sm={6}>
            <TextField
            style={{marginTop:"3%",marginBottom:"2%"}}
            id="hospitalId"
            name="hospitalId"
            select
            fullWidth
            label="Select Hospital To Donate"
            value={inputValues.hospitalId}
            onChange={handleOnChange}
          >
            {hospitalList.length === 0?''
          :
          hospitalList.map((option) => (
            <MenuItem key={option.HospitalId} value={option.HospitalId}>
              {option.HospitalName}
            </MenuItem>
          ))
          }
          </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
          <TextField
          margin="normal"
          required
          fullWidth
          onChange={handleOnChange}
      value={inputValues.donarPassword}
          name="donarPassword"
          label="Password"
          type="password"
          id="donarPassword"
          autoComplete="current-password"
        />
                        </Grid>
                </Grid>
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
                    <Link href="/DonarSignIn" variant="body2">
                      {"If you have an account? Sign In"}
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

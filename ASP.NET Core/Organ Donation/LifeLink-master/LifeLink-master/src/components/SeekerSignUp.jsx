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

export const SeekerSignUp = (props) => {


  const [hospitalList, setHospitalList] = useState([]);
  const [inputValues, setInputValues] = useState({
    seekerFirstName:'',seekerLastName:'',seekerEmail:'',seekerNo:'',seekerDateOfBirth:'',seekerGender:'',seekerAdhaar:'',seekerAddress:'',hospitalId:'',zipcode:''
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
        'SeekerName':inputValues.seekerFirstName+' '+inputValues.seekerLastName,
        'SeekerEmail':inputValues.seekerEmail,
        'SeekerNo':inputValues.seekerNo,
        'SeekerDateOfBirth':inputValues.seekerDateOfBirth,
        'SeekerGender':inputValues.seekerGender,
        'SeekerAdhaar':inputValues.seekerAdhaar,
        'SeekerAddress':inputValues.seekerAddress+','+inputValues.zipcode,
        'HospitalId':inputValues.hospitalId
     }
     console.log("body",body);
     let result=await postData('Seeker',body)
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
              
              <Typography component="h1" variant="h5">
                <h3>Seeker Sign Up</h3>
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
                  name="seekerFirstName"
                  required
                  fullWidth
                  onChange={handleOnChange}
                  value={inputValues.seekerFirstName}
                  id="seekerFirstName"
                  label="Enter First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  onChange={handleOnChange}
                  value={inputValues.seekerLastName}
                  id="seekerLastName"
                  label="Enter Last Name"
                  name="seekerLastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  onChange={handleOnChange}
                  value={inputValues.seekerEmail}
                  id="seekerEmail"
                  label="Email Address"
                  name="seekerEmail"
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
                value={inputValues.seekerNo}
                id="seekerNo"
                label="Enter Contact No"
                name="seekerNo"
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
                  value={inputValues.seekerDateOfBirth}
                  id="seekerDateOfBirth"
                  label="Enter Date of birth"
                  name="seekerDateOfBirth"
                  autoComplete="seekerDateOfBirth"
                  autoFocus
                />
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  onChange={handleOnChange}
                  value={inputValues.seekerGender}
                  id="seekerGender"
                  label="Enter Gender"
                  name="seekerGender"
                  autoComplete="seekerGender"
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
                value={inputValues.seekerAdhaar}
                id="seekerAdhaar"
                label="Enter Adhaar Number"
                name="seekerAdhaar"
                autoComplete="seekerAdhaar"
                autoFocus
              />
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField
              margin="normal"
              required
              fullWidth
              onChange={handleOnChange}
              value={inputValues.seekerAddress}
              id="seekerAddress"
              label="Enter Address"
              name="seekerAddress"
              autoComplete="seekerAddress"
              autoFocus
            />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
            margin="normal"
            required
            fullWidth
            onChange={handleOnChange}
        value={inputValues.zipcode}
            name="zipcode"
            label="Zipcode"
            id="zipcode"
            autoComplete="zipcode"
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
          submit Request
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

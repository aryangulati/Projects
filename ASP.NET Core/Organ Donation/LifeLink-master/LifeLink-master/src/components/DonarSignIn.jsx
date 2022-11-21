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
import Alert from '@mui/material/Alert';
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { postData } from "../FetchServices";


const theme = createTheme();

export const DonarSignIn = (props) => {
  const [styleValue,setStyleValue]=useState({display:"none"})
  const [inputValues, setInputValues] = useState({
    donarEmail: '',donarPassword:''
  });

  
  useEffect(() => {
  }, []);

  const handleOnChange = event => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    // const data = new FormData(event.currentTarget);
    console.log(inputValues);
    let body={
      'DonarEmail':inputValues.donarEmail,
      'DonarPassword':inputValues.donarPassword
   }
   console.log("body",body);
   let result=await postData('Donar/DonarLogin',body)
   console.log("result",result);
    if(result.length)
    {
  localStorage.setItem('DonarId',result[0].DonarId);
     console.log('data recived successfully')
     setStyleValue({ ...styleValue, display: 'none'});
     window.location = '/DonarProfile';
    }
    else{
      console.log('data not recieved ')
      setInputValues({ ...inputValues, donarEmail: '',donarPassword:'' });
      setStyleValue({ ...styleValue, display: 'block'});
    }  
  };

  

    return (
<ThemeProvider theme={theme}>
<Grid container component="main" sx={{ height: "100vh" }}>
  <CssBaseline />
  <Grid
    item
    xs={false}
    sm={9}
    md={8}
    sx={{
      backgroundImage: "url(img/LoginImage.jpg)",
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
    xs={12}
    sm={8}
    md={4}
    component={Paper}
    elevation={6}
    square
  >
    <Box
      sx={{
        m: 5,
        my: 22,
        mx: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Donar Sign in
      </Typography>
      <Box
        component="form"
        noValidate
        onSubmit={handleSubmit}
        sx={{ mt: 1 }}
      >
        <TextField
          margin="normal"
          required
          fullWidth
          value={inputValues.donarEmail}
          id="donarEmail"
          label="Email Address"
          name="donarEmail"
          autoComplete="email"
          autoFocus
          onChange={(e)=>handleOnChange(e)}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          value={inputValues.donarPassword}
          name="donarPassword"
          label="Password"
          type="password"
          id="donarPassword"
          autoComplete="current-password"
          onChange={(e)=>handleOnChange(e)}
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
          Sign In
        </Button>
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link href="/DonarSignUp" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
        <Alert variant="outlined" severity="error" style={styleValue}>
  Login Falied! check your Email Id or Password
</Alert>
      </Box>
    </Box>
  </Grid>
</Grid>
</ThemeProvider>     
     );
};

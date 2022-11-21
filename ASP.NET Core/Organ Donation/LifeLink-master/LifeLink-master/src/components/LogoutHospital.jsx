import  {useEffect } from "react";

export const LogoutHospital = (props) => {

useEffect(() => {
  localStorage.removeItem("HospitalId");
  window.location="/HospitalSignIn"
}, [])

return(
    <div></div>
);
}
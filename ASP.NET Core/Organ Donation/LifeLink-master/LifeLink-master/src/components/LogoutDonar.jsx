import  {useEffect } from "react";

export const LogoutDonar = (props) => {

useEffect(() => {
  localStorage.removeItem("DonarId");
  window.location="/DonarSignIn"
}, [])
return(
    <div></div>
);
}
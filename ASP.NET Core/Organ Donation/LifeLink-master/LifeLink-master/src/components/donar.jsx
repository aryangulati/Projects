import React,{useEffect,useState} from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {postData} from "../FetchServices";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));



export const DonarList = () => {

  const [DonarList, setDonarList] = useState([]);
  const HospitalId = localStorage.getItem('HospitalId');

  useEffect(() => {
  getData()

  },[])

 const getData =async ()=> {
  let body={
    'HospitalId':HospitalId
 }
 console.log("body",body);
 let result=await postData('Hospital/GetAllDonarsList',body)
 console.log("result",result);
  if(result)
  {
    setDonarList(result);
   console.log('data recived successfully')
  //  this.props.navigation.navigate('login')     
  }
  else{
    console.log('data not recieved ')
  }  
  }
   
  const HadleDelete=async (e,id) =>{

    e.preventDefault()
    let body={
      'DonarId':id
   }
   console.log("body",body);
   let result=await postData('Donar/DeleteDonar',body)
   console.log("result",result);
   if(result)
  {
   console.log(result)
   getData()
  //  this.props.navigation.navigate('login')     
  }
  else{
    console.log('data not recieved ')
  }  
  }

  return (
    <>
      <TableContainer component={Paper} style={{marginTop:"5%"}}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell style={{ fontSize: "13px" }}>
                S.No.
              </StyledTableCell>
              <StyledTableCell style={{ fontSize: "13px" }}>
                Donar Name
              </StyledTableCell>
              <StyledTableCell style={{ fontSize: "13px" }} align="left">
                Email Address
              </StyledTableCell>
              <StyledTableCell style={{ fontSize: "13px" }} align="left">
              Contact No
            </StyledTableCell>
              <StyledTableCell style={{ fontSize: "13px" }} align="left">
                Date Of Birth
              </StyledTableCell>
              <StyledTableCell style={{ fontSize: "13px" }} align="left">
                Gender
              </StyledTableCell>
              <StyledTableCell style={{ fontSize: "13px" }} align="left">
              Adhaar No.
              </StyledTableCell>
              <StyledTableCell style={{ fontSize: "13px" }} align="left">
               Address
              </StyledTableCell>
              <StyledTableCell style={{ fontSize: "13px" }} align="left">
               Last Update Date
              </StyledTableCell>
              <StyledTableCell style={{ fontSize: "13px" }} align="left">
                Actions
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {DonarList.map((row,index) => (
              <StyledTableRow key={row.DonarId}>
              <StyledTableCell>{index+1}</StyledTableCell>
              <StyledTableCell>{row.DonarName}</StyledTableCell>
                <StyledTableCell>{row.DonarEmail}</StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {row.DonarNo}
                </StyledTableCell>
                <StyledTableCell align="left">{row.DonarDateOfBirth}</StyledTableCell>
                <StyledTableCell align="left">{row.DonarGender}</StyledTableCell>
                <StyledTableCell align="left">{row.DonarAdhaar}</StyledTableCell>
                <StyledTableCell align="left">{row.DonarAddress}</StyledTableCell>
               
                <StyledTableCell align="left">{row.UpdateDate.split("T")[0]}</StyledTableCell>
                <StyledTableCell align="left">
               
                  <i
                    class="fa fa-trash"
                    aria-hidden="true"
                    style={{ fontSize: "22px", color: "red" }}
                    onClick={(e)=>HadleDelete(e,row.DonarId)}
                  ></i>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

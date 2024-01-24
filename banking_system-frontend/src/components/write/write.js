import React, { useState } from "react";
import { Box } from "@mui/material";
import styled from "@emotion/styled";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import Swal from "sweetalert2";
import axios from "axios";
import SideNavBar from "../sidenav/sidenav";

const MainReadContainer = styled(Box)`
  height: 700px;
  min-width: 99%;
  padding: 0;
  display: flex;
`;

const ReadContentDiv = styled(Box)`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const ShowRecords = styled(Box)`
  height: 90%;
  width: 60%;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  margin: 50px;
  margin-left: 280px;
`;
const UpperHeadingDiv = styled(Box)`
  height: 10%;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;
const UpperHeading = styled(Box)`
  height: 60%;
  width: 100%;
  display: flex;
  gap: 450px;
`;

const CreateAccount = styled(Box)`
  height: 50%;
  width: 50%;
  margin-top: 15px;
  margin-left: 30px;
  font-size: 24px;
  font-weight: 600;
  font-family: Inter sans-serif;
  color: #404040;
`;

const DetailsDiv = styled(Box)`
  height: 90%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;

function Write() {
  //  const [name,setName] = useState();
  //  const[account, setAccount] = useState();
  //  const[bank ,setBank] = useState();
  //  const[address, setAddress] = useState();
  //  const[city , setCity] = useState();
  //  const[country, setCountry] = useState();
  //  const[zip, setZip] = useState();

  //creating the one state for the user
  const [user, setUser] = useState({
    username: "",
    accountnumber: "",
    bankname: "",
    address: "",
    city: "",
    country: "",
    zip: "",
  });

  const handleInput = (e) => {
    // console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  // console.log(user);

  const sweetalert = () => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your account has been created!",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const handleClear =() =>{
    setUser({
      username:"",
      accountnumber:"",
      bankname:"",
      address:"",
      city:"",
      country:"",
      zip:"",
    })
  }

  const handleSubmit = (e) => {
    sweetalert();
    handleClear();
    axios
      .post("http://localhost:4000/user/create_account", {
        user:user
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <MainReadContainer>
        <SideNavBar />
        <ReadContentDiv>
          <ShowRecords>
            <UpperHeadingDiv>
              <UpperHeading>
                <CreateAccount style={{fontFamily:'Inter,sans-serif'}}>Create Account</CreateAccount>
              </UpperHeading>
            </UpperHeadingDiv>
            <DetailsDiv>
              <TextField
                id="outlined-basic"
                label="Vender Name"
                variant="outlined"
                inputProps={{
                  style: {
                    height: 12,
                  },
                }}
                style={{ width: "80%", marginTop: "15px",fontFamily:"Inter,sans-serif"}}
                required
                type="text"
                value={user.username}
                name="username"
                onChange={handleInput}
              />
              <TextField
                id="outlined-basic"
                label="Bank Account No"
                variant="outlined"
                inputProps={{
                  style: {
                    height: 12,
                  },
                }}
                style={{ width: "80%" }}
                required
                type="text"
                name="accountnumber"
                value={user.accountnumber}
                onChange={handleInput}
              />
              <TextField
                id="outlined-basic"
                label="Bank Name"
                variant="outlined"
                inputProps={{
                  style: {
                    height: 12,
                  },
                }}
                style={{ width: "80%" }}
                required
                type="text"
                name="bankname"
                value={user.bankname}
                onChange={handleInput}
              />
              <TextField
                id="outlined-basic"
                label="Address"
                variant="outlined"
                inputProps={{
                  style: {
                    height: 12,
                  },
                }}
                style={{ width: "80%" }}
                required
                type="text"
                name="address"
                value={user.address}
                onChange={handleInput}
              />
              <TextField
                id="outlined-basic"
                label="City"
                variant="outlined"
                inputProps={{
                  style: {
                    height: 12,
                  },
                }}
                style={{ width: "80%" }}
                required
                type="text"
                name="city"
                value={user.city}
                onChange={handleInput}
              />
              <TextField
                id="outlined-basic"
                label="Country"
                variant="outlined"
                inputProps={{
                  style: {
                    height: 12,
                  },
                }}
                style={{ width: "80%" }}
                required
                type="text"
                name="country"
                value={user.country}
                onChange={handleInput}
              />
              <TextField
                id="outlined-basic"
                label="Zip Code"
                variant="outlined"
                inputProps={{
                  style: {
                    height: 12,
                  },
                }}
                style={{ width: "80%" }}
                required
                type="number"
                name="zip"
                value={user.zip}
                onChange={handleInput}
              />
              <Button
                variant="contained"
                type="submit"
                sx={{
                  width: "40%",
                  background: "#00ca80",
                  color: "black",
                  fontFamily: "Inter,sans-serif",
                  fontSize: "16px",
                }}
               
                onClick={handleSubmit}
              >
                Create Account
              </Button>
            </DetailsDiv>
          </ShowRecords>
        </ReadContentDiv>
      </MainReadContainer>
    </>
  );
}

export default Write;

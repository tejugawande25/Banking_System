import React from "react";
import { Box } from "@mui/material";
import styled from "@emotion/styled";
import PrimarySearchAppBar from "../uppernav/uppernav";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import SearchIcon from "@mui/icons-material/Search";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import Swal from "sweetalert2";
import SideNavBar from "../sidenav/sidenav";
import axios from "axios";
import { useEffect } from "react";

const MainDashboard = styled(Box)`
height:685px;
min-width:99%;
padding:0;
display:flex;
}
`;

const RightDiv = styled(Box)`
  display: flex;
  flex-direction: column;
`;
const MainDiv = styled(Box)`
  height: 100%;
  width: 100%;
`;
const InsideDiv = styled(Box)`
  height: 86%;
  width: 94%;
  margin: 45px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  display: flex;
  flex-direction: column;
`;

const UpperHeadingDiv = styled(Box)`
  height: 15%;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;
const UpperHeading = styled(Box)`
  height: 60%;
  width: 100%;
  display: flex;
  gap: 450px;
`;
const AccountDetails = styled(Box)`
  height: 50%;
  width: 50%;
  margin-top: 15px;
  margin-left: 30px;
  font-size: 24px;
  font-weight: 600;
  font-family: Inter sans-serif;
  color: #404040;
`;
const LogoutButton = styled(Box)`
  height: 55%;
  width: 12%;
  margin-top: 13px;
`;
const SearchDiv = styled(Box)`
  height: 12%;
  width: 100%;
  display: flex;
  gap: 450px;
`;

const SubHeadingDiv = styled(Box)`
  height: 10%;
  width: 100%;
  border-bottom: 1px solid black;
  margin-bottom: 10px;
  display: flex;
`;
const Div = styled(Box)`
  display: flex;
  height: 70%;
  width: 13%;
  margin-top: 7px;
  align-items: center;
  justify-content: center;
  font-size: 17px;
  font-weight: 600;
  color: #404040;
`;
const InformationDiv = styled(Box)`
  height: 10%;
  width: 100%;
  display: flex;
`;
const InfoDiv = styled(Box)`
  display: flex;
  height: 70%;
  width: 13%;
  margin-top: 7px;
  align-items: center;
  justify-content: center;
  font-size: 17px;
  color: #404040;
`;
const EditIcon = styled(ModeEditIcon)``;
const MyDeleteIcon = styled(DeleteIcon)``;
const InputTextField = styled(TextField)`
  width: 80%;
  font-size: 15px;
  background: #f7f8fc;
  color: black;
  padding: 0px;
  & .MuiOutlinedInput-notchedOutline {
    border: none;
  }
  & .MuiOutlinedInput-root {
    font-size: 16px;
  }
`;
const SearchInnerDiv = styled(Box)`
  height: 80%;
  width: 50%;
  margin-top: 10px;
  margin-left: 30px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;
const MySearchIcon = styled(SearchIcon)`
  height: 50px;
  font-size: 28px;
  margin-left: 10px;
`;
const SearchButtonDiv = styled(Box)`
  height: 80%;
  width: 12%;
  margin-top: 15px;
`;
const MainBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 90vh;
  width: 30vw;
  background: white;
  border: none;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  //   justify-content:center;
  align-items: center;
`;

const UpdatingHeadingDiv = styled(Box)`
  height: 10%;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;
const UpdatingHeading = styled(Box)`
  height: 60%;
  width: 100%;
  display: flex;
  gap: 450px;
`;
const Update = styled(Box)`
  height: 50%;
  width: 50%;
  margin-top: 15px;
  margin-left: 30px;
  font-size: 24px;
  font-weight: 600;
  font-family: Inter sans-serif;
  color: #404040;
`;

function Dashboard() {
  const [open, setOpen] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = () =>{
    axios
    .get("http://localhost:4000/user/display_account")
    .then((users) => setUsers(users.data), console.log(users))
    .catch((err) => console.log(err));
  }

  console.log(users);
  const handleClose = () => {
    setOpen(false);
  };
  
  const deleteUser = (id, username) => {
    if (window.confirm(`Are you sure you want to delete ${username}`)) {
      axios
        .post("http://localhost:4000/user/delete_account",{
            userid: id,
          })
        .then((data) =>{
          getAllUsers()
          console.log(data) 
        })
        .catch((err) => console.log(err));
    } else {
    }
  };
  
  return (
    <>
      <MainDashboard>
        <SideNavBar />
        <RightDiv>
          <PrimarySearchAppBar />
          <MainDiv>
            <InsideDiv>
              <UpperHeadingDiv>
                <UpperHeading>
                  <AccountDetails>Accounts Details</AccountDetails>
                  <LogoutButton>
                    <Button
                      variant="contained"
                      sx={{
                        width: "100%",
                        background: "#00ca80",
                        color: "black",
                        fontFamily: "Times New Roman",
                        fontSize: "16px",
                      }}
                    >
                      Logout
                    </Button>
                  </LogoutButton>
                </UpperHeading>
              </UpperHeadingDiv>
              <SearchDiv>
                <SearchInnerDiv>
                  <MySearchIcon></MySearchIcon>
                  <InputTextField
                    inputProps={{
                      style: {
                        paddingTop: 12,
                      },
                    }}
                  ></InputTextField>
                </SearchInnerDiv>
                <SearchButtonDiv>
                  <Button
                    variant="contained"
                    sx={{
                      width: "100%",
                      height: "43px",
                      background: "#00ca80",
                      color: "black",
                      fontFamily: "Times New Roman",
                      fontSize: "18px",
                    }}
                  >
                    Search
                  </Button>
                </SearchButtonDiv>
              </SearchDiv>
              <SubHeadingDiv>
                <Div>Vender Name</Div>
                <Div>Bank Account No</Div>
                <Div>Bank Name</Div>
                <Div>Address</Div>
                <Div>City</Div>
                <Div>Country</Div>
                <Div>Zip Code</Div>
                <Div></Div>
              </SubHeadingDiv>
              {users.map((user) => {
                return (
                  <InformationDiv>
                    <InfoDiv>{user.username}</InfoDiv>
                    <InfoDiv>{user.accountnumber}</InfoDiv>
                    <InfoDiv>{user.bankname}</InfoDiv>
                    <InfoDiv>{user.address}</InfoDiv>
                    <InfoDiv>{user.city}</InfoDiv>
                    <InfoDiv>{user.country}</InfoDiv>
                    <InfoDiv>{user.zip}</InfoDiv>

                    <InfoDiv style={{ display: "flex", gap: "20px" }}>
                      <EditIcon
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          setOpen(!open);
                        }}
                      ></EditIcon>
                      <MyDeleteIcon
                        style={{ cursor: "pointer" }}
                        onClick={() => deleteUser(user._id, user.username)}
                      ></MyDeleteIcon>
                    </InfoDiv>
                  </InformationDiv>
                );
              })}
            </InsideDiv>
          </MainDiv>
        </RightDiv>
        <Modal open={open} onClose={handleClose}>
          <MainBox>
            <MainBox>
              <UpdatingHeadingDiv>
                <UpdatingHeading>
                  <Update>Update Account</Update>
                </UpdatingHeading>
              </UpdatingHeadingDiv>
              <TextField
                id="outlined-basic"
                label="Vender Name"
                variant="outlined"
                inputProps={{
                  style: {
                    height: 12,
                  },
                }}
                style={{ width: "80%" }}
                required
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
              />
              <Button
                variant="contained"
                sx={{
                  width: "50%",
                  background: "#00ca80",
                  color: "black",
                  fontFamily: "Times New Roman",
                  fontSize: "16px",
                }}
                onClick={() => {
                  handleClose();
                  Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Account updated successfully!",
                    showConfirmButton: false,
                    timer: 2500,
                  });
                }}
              >
                Update
              </Button>
            </MainBox>
          </MainBox>
        </Modal>
      </MainDashboard>
    </>
  );
}

export default Dashboard;

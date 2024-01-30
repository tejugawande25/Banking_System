import React, { useEffect } from "react";
import { Box } from "@mui/material";
import styled from "@emotion/styled";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";



const clientId =
  "607308705140-3lpdun1q9v1d2qu9hkt15lju5i6f1vi8.apps.googleusercontent.com";

const MainConainer = styled(Box)`
height:700px;
min-widthL100%;
`;

const LoginContainer = styled(Box)`
  height: 80%;
  width: 60%;
  display: flex;
  margin-top: 70px;
  margin-left: 320px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  border-radius:10px;
  overflow:hidden;
`;
const LeftDiv= styled(Box)`

`

const RightDiv = styled(Box)`
display:flex;
flex-direction:column;
align-items:center;
gap:20px;
justify-content:center;
`

const LoginHeadingDiv = styled(Box)`
margin-left:80px;
display:flex;
flex-direction:column;
align-items:center;
font-family:Inter,sans-serif;

`
const LoginButtonDiv = styled(Box)`
display:flex;
align-items:center;
margin-left:80px;
`

function Login() {
  const Navigate  = useNavigate();
 const onhandleClick =(e) =>{
  Navigate('/dashboard');
 }


  return <>
   <MainConainer>
    <LoginContainer>
    <LeftDiv style={{width:"50%",xbackground:"url(https://i.pinimg.com/564x/a1/27/a1/a127a179efaf02e571b2a86ed79d16a9.jpg)",objectFit:"cover",
  }}>
        
        </LeftDiv>
      <RightDiv>
        <LoginHeadingDiv>
          <div style={{background:"url(https://pngimg.com/d/bank_PNG3.png)",height:"80px",width:"100px"}}>
            <img src="https://pngimg.com/d/bank_PNG3.png" style={{height:"90px"}}/>
          </div>
          <h2 style={{fontWeight:"500"}}> Welcome to Bank!</h2>
          <p style={{color:"gray"}}>Your Faithful And Friendly Financial Partner</p>
        </LoginHeadingDiv>
        <LoginButtonDiv>
       <GoogleLogin
       onSuccess={(CredentialResponse) =>{
        console.log(CredentialResponse);
        onhandleClick();
       }}
       onError={() =>{
        console.log("Login Failed.");
       }}
       />
       </LoginButtonDiv>
      </RightDiv>
       
    </LoginContainer>
   </MainConainer>
  </>;
}

export default Login;

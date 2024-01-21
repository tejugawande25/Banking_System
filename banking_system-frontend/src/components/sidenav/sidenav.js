import React from "react";
import {Box} from "@mui/material"
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SaveAsIcon from "@mui/icons-material/SaveAs";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import Swal from "sweetalert2";
import styled from "@emotion/styled";


const SideNav = styled(Box)`
  height: 100%;
  width: 90px;
  background: #6699cc;
  display: flex;
  flex-direction: column;
  gap: 60px;
`;
const MenuDiv = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
`;
const RouteDiv = styled(Box)`
  height: 400px;
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
`;
function SideNavBar() {
    const [press, setPressed] = useState(false);
  return (
    <>
      <SideNav>
        <MenuDiv
          onClick={() => {
            setPressed(true);
          }}
        >
          <MenuIcon
            style={{
              cursor: "pointer",
              fontSize: "35px",
            }}
          ></MenuIcon>
        </MenuDiv>
        {press === false ? (
          " "
        ) : (
          <RouteDiv>
            <Link to={"/dashboard"} style={{ color: "black" }}>
              <HomeIcon
                style={{
                  cursor: "pointer",
                  fontSize: "35px",
                }}
                onClick={() => {
                  
                  Swal.fire("You are currently on dashboard!")
                  
                }}
              ></HomeIcon>
            </Link>

            <Link to={"/write"} style={{ color: "black" }}>
              <SaveAsIcon
                style={{
                  cursor: "pointer",
                  fontSize: "35px",
                }}
              ></SaveAsIcon>
            </Link>
          </RouteDiv>
        )}
      </SideNav>
    </>
  );
}

export default SideNavBar;

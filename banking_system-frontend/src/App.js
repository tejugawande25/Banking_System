import React from "react";
import Dashboard from "./components/dashboard/dashboard";
import Write from "./components/write/write";
import {BrowserRouter, Route,Routes} from "react-router-dom";
import Login from "./components/Login/login";


function App(){
  return(<>
   <BrowserRouter>
   <Routes>
    <Route element={<Dashboard />} path="/dashboard"></Route>
    <Route element={<Write/>} path="/write"></Route>
    <Route element={<Login />} path="/"></Route>
   </Routes>
   </BrowserRouter>
  </>);
}


export default App;
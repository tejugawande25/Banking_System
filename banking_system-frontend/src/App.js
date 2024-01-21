import React from "react";
import Dashboard from "./components/dashboard/dashboard";

import Write from "./components/write/write";
import {BrowserRouter, Route,Routes} from "react-router-dom";

function App(){
  return(<>
   <BrowserRouter>
   <Routes>
    <Route element={<Dashboard />} path="/dashboard"></Route>
    <Route element={<Write/>} path="/write"></Route>
   </Routes>
   </BrowserRouter>
  </>);
}


export default App;
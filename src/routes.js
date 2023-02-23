
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Homepage from "./pages/Homepage";

const AppRoutes = (prop) => {
    const location = useLocation();
  
    return (
      <div>
        <Routes>
            <Route path="" index element={<Homepage/>} />
        </Routes>
      </div>
    );
  };
  
  export default AppRoutes;
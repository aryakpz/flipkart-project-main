import React from "react";
import { getlog } from "../utils/utilsFunctions";
import { Navigate, Outlet } from "react-router-dom";



export const LogOut: React.FC = () => {
    if (getlog()) {
      return <Outlet />;
    } else {
      return <Navigate to="/login" />;
    }
  };
import React from "react";
import { NavBar } from "./navBar";
import { DropDown } from "./dropDown";

export const MainPage:React.FC=()=>{
    return(
        <div className="w-full m-0 p-0 flex flex-row">
            <NavBar/>
            <DropDown/>
        
           

        </div>
    )
}
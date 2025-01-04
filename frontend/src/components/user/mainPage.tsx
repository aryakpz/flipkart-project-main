import React from "react";
import { NavBar } from "./navBar";
import { DropDown } from "./dropDown";
import { BodySection } from "./bodySection";

export const MainPage: React.FC = () => {
    return (
       <>
        <div className="w-full m-0 p-0 flex flex-col">
            <NavBar />
            <DropDown />
            <BodySection/>
        </div>
       </>
    )
}  


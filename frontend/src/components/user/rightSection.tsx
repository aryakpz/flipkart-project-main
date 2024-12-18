import React from "react";
import { ViewProduct } from "./viewProducts";

export const RightSection: React.FC = () => {
    return (
        <div className="flex flex-grow overflow-aut  flex-col  mt-2">
            <div className="">
                <React.Fragment >
                    <div className=" flex">
                        <div className="text-xs font-f-regular flex text-gray-600 cursor-pointer">
                            <span className="max-w-20 whitespace-nowrap overflow-hidden overflow-ellipsis inline align-middle hover:max-w-max"></span>
                            {/* <img className="w-3 h-2 ml-1 mr-1 mt-1 invert-[0.6]" /> */}
                        </div>
                    </div>
                </React.Fragment>
                <ViewProduct/>

            </div>
        </div>
    )
}
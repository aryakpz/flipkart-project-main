import React from "react";
import { LeftSection } from "./leftSection";
import { RightSection } from "./rightSection";

export const BodySection: React.FC = () => {
    return (
        <div className="w-full bg-gray-100 m-auto h-full">
            <div className="mx-auto w-full min-w-[978px] max-w-[1680px] mt-[1px] ">
                <div className="flex overflow-auto ">
                    <LeftSection />
                    <RightSection />
                </div>            
            </div>
        </div>                                                                              
    )
}
    
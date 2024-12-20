import React from "react";
import { useDetailsFetch } from "../../Hooks/useJsonFecth";
import { dropProps, productPropType } from "../../Types/type";

export const DropDown: React.FC = () => {
    const { data } = useDetailsFetch();
    console.log("nav",data?.data?.drop)
    return (
        <div className="mt-[56px] shadow-lg max-h-10 flex gap-2 bg-white w-full ">
            <div className="items-center h-10 justify-between">
                {data?.data.map((item: productPropType, index: number) => {
                    
                    item.drop.map((item:dropProps) => {
                        <span className="text-black flex flex-grow justify-center items-center box-border font-f-regular text-[13.4px] min-w-max  cursor-pointer pt-[2px] hover:text-flip-blue hide-last-two-images adjust-last-child" key={index}>
                            {item.data}
                            <img src={item.icon} className="w-2 invert-[0.7] ml-[6px] mt-[-2px]" />
                        </span>
                    })       
                })}
            </div>
        </div>
    )
}


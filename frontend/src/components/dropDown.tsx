import React from "react";
import { useDetailsFetch } from "../Hooks/useJsonFecth";
import { productPropType } from "../Types/type";

export const DropDown: React.FC = () => {
    const { data } = useDetailsFetch()
    return (
        <div className="mt-[56px] shadow-sm min-h-10 flex gap-2 bg-white">
            <div className="items-center h-10 justify-between">
                {data?.data.map((item: productPropType, index: number) => {
                    item.drop.map((it) => {
                        <span className="text-black flex flex-grow justify-center items-center box-border font-f-regular text-[13.4px] min-w-max  cursor-pointer pt-[2px] hover:text-flip-blue hide-last-two-images adjust-last-child" key={index}>
                            {it.data}
                            <img src={it.icon} className="w-2 invert-[0.7] ml-[6px] mt-[-2px]" />
                        </span>
                    })
                })}
            </div>
        </div>
    )
}
import React from "react";
import { useDetailsFetch } from "../../Hooks/useJsonFecth";
import { dropProps } from "../../Types/type";

export const DropDown: React.FC = () => {
    const { data } = useDetailsFetch();
    const item = data?.data[0];
    const drop = item?.drop;
    return (
        <div className="border max-h-10 flex gap-2 bg-white w-screen mt-14">
            <div className="items-center h-10 justify-between flex gap-12 text-center m-auto max-w-screen-2xl ">
                {drop?.map((i: dropProps, index: number) => (
                    <span key={index} className="text-black flex flex-grow  justify-center items-center box-border font-f-medium text-[13.4px] min-w-max  cursor-pointer pt-[2px] hover:text-flip-blue " >
                        {i.data}
                        <img src={i.icon} className="w-2 invert-[0.7] ml-[6px] mt-[-2px]" />
                    </span>
                ))
                }
            </div>
        </div>
    )
}

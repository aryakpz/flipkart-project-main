import React from "react";
import { ViewProduct } from "./viewProducts";
import { useDetailsFetch } from "../../Hooks/useJsonFecth";
import { SortSection } from "./sortSection";

type right = {
    val: string,
    icon: string
}
                     
export const RightSection: React.FC = () => {
    const { data } = useDetailsFetch();
    const item = data?.data[0]
    const right = item?.right;
    return (
        <div className="flex flex-grow overflow-auto  flex-col  mt-2  ">
            <div className="flex flex-col bg-white ">
                <React.Fragment >
                    <div className=" flex bg-white pt-4 pl-4 pb-2">
                        <div className="text-xs font-f-regular flex text-gray-600 cursor-pointer">
                            {right?.map((i: right, index: number) => (
                                <React.Fragment key={index}>
                                    <span className="max-w-20 whitespace-nowrap overflow-hidden overflow-ellipsis inline align-middle hover:max-w-max">
                                        {i.val}
                                    </span>
                                    <img className="w-3 h-2 ml-1 mr-1 mt-1 invert-[0.6]" src={i.icon} />
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                    <SortSection />
                </React.Fragment>
                <ViewProduct />
            </div>
        </div>
    )
}
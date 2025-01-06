// import React from "react";
// import { useDetailsFetch } from "../../Hooks/useJsonFecth";

// export const PriceFilter: React.FC = () => {
//     const { data } = useDetailsFetch();
//     return (
//         <div className="pb-4 w-full">
//             {data?.data.map((item: any, index: number) => (
//                 <div key={index} className="w-full ">
//                     <div className="border-b pb-3">
//                         <span className="text-lg font-f-semibold  ">{item.filter.filter}</span>
//                     </div>
//                     <div className=" flex flex-col font-f-regular border-b pb-5">
//                         <span className="text-xs py-3">{item.filter.category}</span>
//                         <span className="flex">
//                             <img className="h-[14px] -rotate-90 mt-1 invert-[0.5]" src={item.filter.toparrow} />
//                             <p className=" text-gray-500 text-sm pl-1">{item.filter.access}</p>
//                         </span>
//                         <span className="pt-3 pl-4 text-sm">{item.filter.mobile}</span>
//                     </div>
//                     <div className="pt-4 flex text-xs flex-col">
//                         <span className="font-f-medium ">{item.filter.price}</span>
//                         <div className="h-6 bg-gray-200 w-full mt-1" ></div>
//                         <div className="relative h-3 cursor-pointer">
//                             <div className="absolute border border-gray-400 bg-white w-[11px] h-[11px] rounded-full left-[-4px]">
//                                 <div></div>
//                             </div>
//                             <div className="w-full h-2 bg-flip-blue">
//                                 <div></div>
//                             </div>
//                             <div className="absolute border border-gray-400 bg-white w-[11px] h-[11px] rounded-full right-[-4px] top-[-1px]">
//                                 <div></div>
//                             </div>
//                         </div>
//                         <div className="flex text-center  w-full pt-2 justify-between p-2 text-sm font-f-regular ">
//                             <div className="">
//                                 <select className="bg-white border p-1 w-24">
//                                     {item.filter.min.map((i: string) => (
//                                         <option value={i}>{i}</option>
//                                     ))}
//                                 </select>
//                             </div>
//                             <div>to</div>
//                             <div>
//                                 <select className="bg-white border p-1 w-24">
//                                     {item.filter.max.map((i: string) => (
//                                         <option value={i}>{i}</option>
//                                     ))}

//                                 </select>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     )
// }
import React from "react";
import { useDetailsFetch } from "../../Hooks/useJsonFecth";

interface PriceFilterProps {
    handlePriceChange: (min: number, max: number) => void;
}

export const PriceFilter: React.FC<PriceFilterProps> = ({ handlePriceChange }) => {
    const { data } = useDetailsFetch();

    const handleSelectChange = (min: string, max: string) => {
        handlePriceChange(Number(min), Number(max));
    };

    return (
        <div className="pb-4 w-full">
            {data?.data.map((item: any, index: number) => (
                <div key={index} className="w-full">
                    <div className="border-b pb-3">
                        <span className="text-lg font-f-semibold">{item.filter.filter}</span>
                    </div>
                    <div className="flex flex-col font-f-regular border-b pb-5">
                        <span className="text-xs py-3">{item.filter.category}</span>
                        <span className="flex">
                            <img
                                className="h-[14px] -rotate-90 mt-1 invert-[0.5]"
                                src={item.filter.toparrow}
                            />
                            <p className="text-gray-500 text-sm pl-1">{item.filter.access}</p>
                        </span>
                        <span className="pt-3 pl-4 text-sm">{item.filter.mobile}</span>
                    </div>
                    <div className="pt-4 flex text-xs flex-col">
                        <span className="font-f-medium">{item.filter.price}</span>
                        <div className="h-6 bg-gray-200 w-full mt-1"></div>
                        <div className="relative h-3 cursor-pointer">
                            <div className="absolute border border-gray-400 bg-white w-[11px] h-[11px] rounded-full left-[-4px]">
                                <div></div>
                            </div>
                            <div className="w-full h-2 bg-flip-blue">
                                <div></div>
                            </div>
                            <div className="absolute border border-gray-400 bg-white w-[11px] h-[11px] rounded-full right-[-4px] top-[-1px]">
                                <div></div>
                            </div>
                        </div>
                        <div className="flex text-center w-full pt-2 justify-between p-2 text-sm font-f-regular">
                            <div className="">
                                <select
                                    className="bg-white border p-1 w-24"
                                    onChange={(e) =>
                                        handleSelectChange(e.target.value, e.target.value) }
                                >
                                    {item.filter.min.map((i: string) => (
                                        <option value={i} key={i}>
                                            {i}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div>to</div>
                            <div>
                                <select
                                    className="bg-white border p-1 w-24"
                                    onChange={(e) =>
                                        handleSelectChange(e.target.value, e.target.value)}
                                >
                                    {item.filter.max.map((i: string) => (
                                        <option value={i} key={i}>
                                            {i}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

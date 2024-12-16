import React from "react";
import { useFetchProduct } from "../../Hooks/useFetchProduct";
import { mobileProps } from "../../Types/type";

export const ViewProduct: React.FC = () => {
    const { data } = useFetchProduct();
    console.log(data)

    return (
        <div className="flex flex-grow overflow-auto bg-white flex-col pt-10">
            <div className="p-4 w-full box-border">
                {data?.viewProduct && data.viewProduct.map((item: mobileProps, index: number) => (
                    <div key={index} className="pt-6 pb-7 pl-6 flex border-b-slate-300 font-f-regular">
                        <div className="relative w-52 ">
                            <div className="w-52 h-52 mx-auto relative">
                                <img className=" absolute b-0 t-0 l-0 r-0 max-w-full max-h-full  opacity-100 mx-auto" src={`http://localhost:5002/${encodeURIComponent(item.image)}`}
               alt="product" />
                            </div>
                            <div className="mt-3 box-border">
                                <input type="checkbox" className=" border-none ml-0" />
                                <label className=" align-middle ml-1 font-f-regular font-normal text-xs tracking-wide">Add to compare</label>
                            </div>
                            <div className="t-[1px] absolute r-[-8px]">
                                <img className="cursor-pointer h-3 relative invert-[0.4]"></img>
                            </div>
                        </div>
                        <div className="flex pl-6 w-full">
                            <div className="w-[58.33%]">
                                <h1 className="font-medium text-base font-f-semibold m-0 cusrsor-pointer tracking-wide mb-0 hover:text-flip-blue">{item.brand}</h1>
                                <div className="mt-0 pt-[1px] " >
                                    <div className="flex">
                                        <span className="bg-f-green text-white w-fit p-1  font-medium rounded-sm text-xs font-f-semibold h-5 text-center">
                                            4.5 <img className=" mt-[2px] mr-[2px] "></img> </span>
                                        <span className="pl-1 font-medium font-f-semibold text-gre">8,886 Ratings & 2,414 Reviews</span>
                                    </div>
                                </div>
                                <div className="mt-4 text-xs font-f-regular font-normal pl-0 flex flex-col">
                                    <span className="text-gray-700 py-1">• {item.ram}RAM and {item.rom}ROM</span>

                                    <span className="text-gray-700 py-1">• {item.screen}Screen Size</span>
                                    <span className="text-gray-700 py-1">• {item.camara} Camara</span>
                                    <span className="text-gray-700 py-1">• {item.processor} Processor</span>

                                    <span className="text-gray-700 py-1">• {item.warrenty} Warrenty</span>
                                </div>
                            </div>
                            <div className="w-[41.66%] pl-14 flex flex-col">
                                <div className="mt-[-3px]">
                                    <span className="font-f-semibold tracking-normal align-top text-[23.5px]">
                                        ₹{item.price}
                                    </span>
                                    <img />
                                </div>
                                <div className="text-f-green text-xs pt-2 font-semibold font-f-semibold">
                                    <span className="text-gray-600  text-xs font-f-regular pr-1 tracking-normal line-through"> ₹59000</span>
                                    <span className="text-f-green text-xs pt-2 font-semibold font-f-semibold">{item.discount} Offer</span>
                                </div>

                                <span className=" py-1 ">Free delivery</span>

                                <span className=" py-1 text-f-green font-f-semibold pt-[1px] font-normal  pb-[2px] ">Save extra with combo offer</span>

                                <span className="text-sm ">Upto {item.exchange} off on exchange</span>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

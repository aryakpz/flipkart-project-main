import React, { useEffect, useState } from "react";
import { mobileProps } from "../../Types/type";
import star from "/assets/icons/whitestar.svg";
import heart from "/assets/icons/heart.svg";
import assure from "/assets/images/image.png"
import { useFilterContext } from "../../context/useContext";
import { useNavigate } from "react-router-dom";
import { PaginationControls } from "./paginationSection";
import { NotFound } from "./NotFound";

export const ViewProduct: React.FC = () => {
    const nav = useNavigate()
    const { filteredData } = useFilterContext()
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;
    // sessionStorage.clear()
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);

    const produts = filteredData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage((prevPage) => prevPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage((prevPage) => prevPage + 1);
        }
    };

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    useEffect(() => {
        setCurrentPage(1)
    }, [filteredData])


    return (
        <div className="flex flex-grow overflow-auto bg-white flex-col h-screen ">
            <div className="p-4 w-full box-border">
                {produts.length > 0 ? produts.map((item: mobileProps, index: number) => (
                    <>
                        <div key={index} className="pt-6 pb-7 pl-6 flex border-b shadow-s font-f-regular " onClick={() => { nav('/singlePage', { state: item }) }}>
                            <div className="relative w-52 ">
                                <div className="w-52 h-52 mx-auto relative">
                                    <img className=" absolute b-0 t-0 l-0 r-0 max-w-full max-h-full  opacity-100 mx-auto" alt={item.link} src={item.link} />
                                </div>
                                <div className="mt-3 box-border">
                                    <input type="checkbox" className=" border-none ml-0" />
                                    <label className=" align-middle ml-1 font-f-regular font-normal text-xs tracking-wide">Add to compare</label>
                                </div>
                                <div className="top-[1px] absolute right-1">
                                    <img className="cursor-pointer h-4 relative invert-[0.4] active:invert-[0]" src={heart}></img>
                                </div>
                            </div>
                            <div className="flex pl-6 w-full">
                                <div className="w-[58.33%]">
                                    <h1 className="font-medium text-base font-f-semibold m-0 cusrsor-pointer tracking-wide mb-0 hover:text-flip-blue">{item.name}</h1>
                                    <div className="mt-0 pt-[1px] " >
                                        <div className="flex pt-2">
                                            <span className=" flex bg-f-green text-white w-fit  p-[2px] pl-2 font-medium rounded-sm text-xs font-f-semibold h-5 text-center">
                                                4.5 <img className=" mt-[2px] mr-[2px] w-3 h-3" src={star} /> </span>
                                            <span className="pl-1 font-medium font-f-medium text-sm">8,886 Ratings & 2,414 Reviews</span>
                                        </div>
                                    </div>
                                    <div className="mt-4 text-xs font-f-regular font-normal pl-0 flex flex-col">
                                        <span className="text-gray-700 py-1">• {item.ram}RAM and {item.rom}ROM</span>
                                        <span className="text-gray-700 py-1">• {item.screen}</span>
                                        <span className="text-gray-700 py-1">• {item.frontcamera} Rear camera | {item.backcamera} back camera</span>
                                        <span className="text-gray-700 py-1">• {item.processor} </span>
                                        <span className="text-gray-700 py-1">• {item.battery} Battery </span>
                                        <span className="text-gray-700 py-1">• {item.warranty} </span>
                                    </div>
                                </div>
                                <div className="w-[41.66%] pl-14 flex flex-col">
                                    <div className="mt-[-3px] flex">
                                        <span className="font-f-semibold tracking-normal align-top text-[23.5px]">
                                            ₹{item.price}
                                        </span>
                                        <img className="w-15 h-5 pl-4 mt-2" src={assure} />
                                    </div>
                                    <div className="text-f-green text-xs pt-2 font-semibold font-f-semibold">
                                        <span className="text-gray-600  text-xs font-f-regular pr-1 tracking-normal line-through"> ₹{item.oldprice}</span>
                                        <span className="text-f-green text-xs pt-2 font-semibold font-f-semibold">{item.discount} Offer</span>
                                    </div>
                                    <span className=" py-1  text-sm">Free delivery</span>
                                    <span className=" py-1 text-f-green font-f-semibold pt-[1px] font-normal text-sm  pb-[2px] ">Save extra with combo offer</span>
                                    <span className="text-sm  flex">Upto <p className="px-2 font-bold">₹{item.exchange} </p>off on exchange</span>
                                </div>
                            </div>
                        </div>

                    </>
                )) :

                    <NotFound />

                }

            </div>
            {produts.length > 0 ?
                <PaginationControls
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPrevious={handlePrevious}
                    onNext={handleNext}
                    onPageChange={handlePageChange}
                />
                : <p></p>
            }
        </div>
    );
};









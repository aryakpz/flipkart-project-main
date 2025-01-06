import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDetailsFetch } from "../../Hooks/useJsonFecth";
import icon from "/assets/icons/angle-right-solid.svg";
import star from "/assets/icons/whitestar.svg";
import asure from "/assets/images/image.png";

type right = {
    val: string,
    icon: string
}

export const SingleProductPage: React.FC = () => {
    const nav = useNavigate();
    const loc = useLocation()
    const { data } = useDetailsFetch();
    const details = data?.data[0]
    const right = details?.right;
    const item = loc.state;

    const buttonClick = () => {
        sessionStorage.setItem("prevPage", location.pathname);
        const token = sessionStorage.getItem("token");
        if (!token) {
            nav('/login')
        }
        else {
            nav('/productBuy', { state: item })
        }
    }

    return (
        <div className=" flex bg-white p-9 w-full">
            <div className="text-xs font-f-regular flex text-gray-600 cursor-pointer">
                {item &&
                    <div className="flex flex-row">
                        <div >
                            <img src={item.link} className="px-10 py-5 border" />
                            <div className="flex justify-between font-f-semibold text-sm tracking-tighter py-5 text-white gap-2">
                                <button className="bg-amber-500 w-[50%] p-4 active:transform active:scale-[0.98]">ADD TO CART</button>
                                <button className=" bg-orange-600 w-[50%] active:transform active:scale-[0.98]" onClick={buttonClick}>BUY NOW</button>
                            </div>
                        </div>
                        <div className="px-9">
                            <div className="text-xs font-f-regular flex text-gray-600 cursor-pointer pb-2">
                                {right?.map((i: right, index: number) => (
                                    <React.Fragment key={index}>
                                        <span className="max-w-20 whitespace-nowrap overflow-hidden overflow-ellipsis inline align-middle hover:max-w-max">
                                            {i.val}
                                        </span>
                                        <img className="w-3 h-2 ml-1 mr-1 mt-1 invert-[0.6]" src={i.icon} />
                                    </React.Fragment>
                                ))}
                                <span className="max-w-20 whitespace-nowrap overflow-hidden overflow-ellipsis inline align-middle hover:max-w-max">
                                    {item.brand} Mobiles
                                </span>
                                <img className="w-3 h-2 ml-1 mr-1 mt-1 invert-[0.6]" src={icon} />
                                <span className="max-w-20 whitespace-nowrap overflow-hidden overflow-ellipsis inline align-middle hover:max-w-max">
                                    {item.brand}
                                </span>
                            </div>
                            <span className="font-f-regular text-lg text-black flex pb-2">{item.name}<p className="text-gray-400">#Just Here</p></span>
                            <div className="flex pb-2">
                                <span className=" flex bg-f-green text-white w-fit  p-[2px] pl-2 font-medium rounded-sm text-xs font-f-semibold h-5 text-center ">
                                    4.5
                                    <img className=" mt-[2px] mr-[2px] w-3 h-3" src={star} />
                                </span>
                                <span className="pl-1 font-medium font-f-medium text-sm flex">
                                    8,886 Ratings & 2,414 Reviews
                                    <img src={asure} className="w-1/6 pl-4" />
                                </span>
                            </div>
                            <span className="font-f-semibold tracking-normal align-top text-3xl text-black flex">
                                ₹{item.price}
                                <p className="line-through font-f-regular text-gray-500 text-base pt-2 pl-2"> ₹{item.oldprice} </p>
                                <p className="text-green-700 pl-2 text-base pt-2"> {item.discount} off</p>
                            </span>
                            <div className="mt-4 text-xs font-f-regular font-normal pl-0 flex flex-col">
                                <span className="text-gray-700 py-1">• {item.ram}RAM and {item.rom}ROM</span>
                                <span className="text-gray-700 py-1">• {item.screen}</span>
                                <span className="text-gray-700 py-1">• {item.frontcamera} Rear camera | {item.backcamera} back camera</span>
                                <span className="text-gray-700 py-1">• {item.processor} </span>
                                <span className="text-gray-700 py-1">• {item.battery} Battery </span>
                                <span className="text-gray-700 py-1">• {item.warranty} </span>
                                <span className="text-sm  flex">• Upto <p className="px-2 font-bold">₹{item.exchange} </p>off on exchange</span>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

//f=w-m*a 
import React, { useState } from "react";
import { NavBar } from "./navBar";
import { DropDown } from "./dropDown";
import { useLocation } from "react-router-dom";
import { useDetailsFetch } from "../../Hooks/useJsonFecth";
import { useOrderPlace } from "../../Hooks/useOrderPlace"

export const ProductBuyPage: React.FC = () => {
    const loc = useLocation()
    const { data } = useDetailsFetch()
    const { orderplaced } = useOrderPlace()
    const pay = data?.data[0];
    const paym = pay?.payment;
    const item = loc.state;
    
    const [count, setCount] = useState<number>(1);
    const [newPrice, setNewPrice] = useState<number>(item?.price);
    const [change, setChange] = useState<string>("")
    const  user=sessionStorage.getItem('name')

    const handleClick = (key: "inc" | "dec", price: number) => {
        if (key === "inc") {
            setCount((prev) => prev + 1);
            setNewPrice((prev) => prev + price);
        } else if (key === "dec" && count > 1) {
            setCount((prev) => prev - 1);
            setNewPrice((prev) => prev - price);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const values = e.target.value
        setChange(values)
    }

    const orderClick = (id:number, name:string,price:number, count:number, newPrice:number) => {
        orderplaced({
            user,id,name,price,count,newPrice,change
        })
    }           
    return (
        <div className="flex flex-col">
            <NavBar />
            <DropDown />
            <div className="w-full bg-gray-100 m-auto h-screen p-4 box-border">
                <div className="mx-auto w-full min-w-[978px] max-w-[1300px] mt-[1px] h-screen  flex-col">
                    <div className="flex overflow-auto  pt  bg-white p-9 w-full ">
                        <div className="text-xs font-f-regular flex text-gray-600 cursor-pointer max-w-full">
                            {item &&
                                <div className="flex w-fit">
                                    <div className="max-w-[600px]">
                                        <img src={item.link} className="px-10 py-5 border  h-[400px] w-[550px]" />
                                    </div>
                                    <div className="w-full px-9 ">
                                        <span className="font-f-regular text-lg text-black flex ">{item.name}</span>
                                        <p className=" text-2xl text-black flex font-f-semibold pb-4">
                                            ₹{item.price}
                                        </p>
                                        <div className="flex gap-4 border w-max p-2 text-lg  rounded-t ">
                                            <div className="font-f-semibold border w-6 align-middle text-center text-orange-700  hover:bg-orange-100" onClick={() => handleClick("inc", item.price)}>
                                                +
                                            </div>
                                            <div>
                                                Quantity
                                            </div>
                                            <div className="font-f-semibold border w-6 align-middle text-center  text-orange-700  hover:bg-orange-100" onClick={() => handleClick("dec", item.price)}>
                                                -
                                            </div>
                                        </div>
                                        <span className="flex font-f-semibold tracking-normal align-top text-xl pt-3">
                                            <p>
                                                Total Quantity :
                                            </p>
                                            <p className="text-black">
                                                {count}
                                            </p>
                                        </span>

                                        <span className="flex font-f-semibold tracking-normal align-top pt-3">
                                            <p className="text-xl">Total Amount : </p>
                                            <p className=" text-2xl text-black flex">
                                                ₹{newPrice}
                                            </p>
                                        </span>
                                        <div>
                                            <p className="mt-4 text-xl font-f-semibold">Payment Options </p>
                                            <div className="mt-4 text-sm font-t-f-regular font-normal pl-0 flex flex-col gap-2">
                                                {paym.map((item: any, index: number) => (
                                                    <span>
                                                        <input type="checkbox" value={item} key={index} onChange={(e) => handleChange(e)} /> {item}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="flex justify-between font-f-semibold text-sm tracking-tighter py-5 text-white gap-2">
                                            <button className=" bg-orange-600 w-[50%] p-4 active:transform active:scale-[0.98]" onClick={() => orderClick(item.id, item.name, item.price, count, newPrice)} >ORDER NOW</button>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
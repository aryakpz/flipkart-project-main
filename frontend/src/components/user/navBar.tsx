import React, { useState } from "react";
import { useDetailsFetch } from "../../Hooks/useJsonFecth";
import { productPropType } from "../../Types/type";

export const NavBar: React.FC = () => {
    const { data } = useDetailsFetch()
    const [search,setSearch]=useState('')
    return (
        <div className="fixed w-full top- text-white flex h-[56px]  overflow-hidden z-z-index bg-flip-blue pl-30px ">
            {data && data.data.map((item: productPropType, index: number) =>
                <React.Fragment key={index}>
                    <div className="h-full min-w-[124px]"></div>
                    <div key={index} className="max-w-[1248px] m-auto font-f-semibold flex pt-3 mt-0 w-[1248px] ">
                        <div className="flex min-w-[137px] justify-end">
                            <div className="w-[76px]">
                                <img src={item.nav.fliplogo} className="w-[75px]" />
                                <div className=" flex text-[11px] font-f-italic mt-[-1px] flex-nowrap tracking-normal ">
                                    {item.nav.explore}
                                    <span className="text-yellow ml-[1px] mr-[2px] font-extrabold">  {item.nav.plus}</span>
                                    <img src={item.nav.plogo} className="w-[10px] h-[10px] mt-[3px]" />
                                </div>
                            </div>
                        </div>
                        <div className="flex mt-[-1px] mr-[29px] mb-[-2px] ml-[12px] min-w-[304px] w-[calc(100% -540px)] bg-bg-white box-border rounded-[1px] px-14px py-0 flex-auto pr-[13px] h-[36px] max-w-[564px] justify-between shadow-sm">
                            <input
                                className="text-text-color border-none w-full text-[14.5px] font-f-regular tracking-[-0.29px] h-[36px] overflow-hidden bg-transparent focus:outline-none pl-3"
                                placeholder="Search for products , brands and more" 
                                value={search}
                                onChange={(e)=>setSearch(e.target.value)}/>
                            <img src={item.nav.search} className="my-[19.4px] w-[19.5px] h-[19.5px] pt-0 mt-[10px]" />
                        </div>
                        <button className="border-none bg-white text-flip-blue mb-[4px] font-semibold pt-[5.5px] pl-[39.9px]  pr-[40.3px] shadow-sm mt-2px text-[15.7px] font-f-regular tracking-[0.099px] h-[35px]">
                            {item.nav.login}
                        </button>
                        <div className="mx-[19.4px] pt-2 min-w-max pl-[21px]  font-f-regular font-semibold text-[15.35px] tracking-[0.13]px ">
                            {item.nav.seller}
                        </div>
                        <div className="mx-[19.4px] min-w-max pl-[21px] tracking-normal pt-2 font-semibold font-f-regular text-[15.7px] ml-[20.5px]  flex">
                            {item.nav.more}
                            <img src={item.nav.down} className="w-2 ml-[5px] mb-[1px] invert mt-[-7px]" />
                        </div>
                        <div className="font-semibold font-f-regular pl-2 pt-2 text-[15.9px] gap-2 tracking-[0.04px] flex">
                            <img src={item.nav.cartimg} className="w-[17px] h-[17px] mt-[3px]" />
                            {item.nav.cart}
                        </div>
                    </div>
                    <div className="h-full min-w-[124px]"></div>
                </React.Fragment>
            )}
        </div>
    )
}

// import React from "react";
// import { useFetchProduct } from "../../Hooks/useFetchProduct";
// import { mobileProps } from "../../Types/type";
// export const LeftSection:React.FC=()=>{
//     const {data}=useFetchProduct()
//     return(
//        <div className="h- bg-white mr-2">
//          <div className=" flex flex-shrink-0 flex-grow-0 w-[280px] flex-col max-w-[280px] gap-1 p-2 ">
//             <h3 className="font-f-semibold text-l">Brand</h3>
//             {
//             data?.viewProduct && data.viewProduct.map((item:mobileProps,index:number)=>(
//                 <div className="" key={index}>
//                     <input type="checkbox" value={item.brand} />
//                     <label> {item.brand}</label>
//                 </div>
//             ))
//             }
//         </div>
//        </div>
//     )
// }


import React from "react";
import { useFetchProduct } from "../../Hooks/useFetchProduct";
import { mobileProps } from "../../Types/type";
import assure from "/assets/images/image.png"

export const LeftSection: React.FC = () => {
    const { data } = useFetchProduct();

    const Brands = Array.from(
        new Set(
            data?.viewProduct?.flatMap((item: mobileProps) => item.brand.toUpperCase())
        )
    );

    const ram = Array.from(new Set(
        data?.viewProduct?.flatMap((item: mobileProps) => item.ram.toUpperCase())
    ))

    const rom = Array.from(new Set(
        data?.viewProduct?.flatMap((item: mobileProps) => item.rom)
    ))

    return (
        <div className="h- bg-white mr-2 mt-2 ">
            <div className="flex flex-shrink-0 flex-grow-0 w-[280px] flex-col max-w-[280px] gap-1 p-4 border-b">
                <h3 className="font-f-medium text-[13px] pb-1">BRAND</h3>
                <input type="text" placeholder="Search Brand" className=" text-sm font-f-regular  focus:outline-none border-b mb-2 p-1 pl-2" />
                {Brands.map((brand: string, index: number) => (
                    <div className="" key={index}>
                        <input type="checkbox" value={brand} />
                        <label className="font-f-regular text-[13px] pl-[5px]"> {brand}</label>
                    </div>
                ))}
                <p className="text-flip-blue text-xs font-f-medium pt-2">178 MORE</p>
            </div>
            <div className="flex flex-shrink-0 flex-grow-0 w-[280px]  max-w-[280px] gap-1 p-4 border-b justify-between ">
                <div className="flex">
                    <input type="checkbox" />
                    <img src={assure} className="w-20 pl-2" />
                </div>
                <div className="flex shadow-black rounded-[50%] w-5 p-1 border h-5 relative">
                    <p className=" absolute  left-[6px]  top-[-2px]">?</p>
                </div>
            </div>
            <div className="flex flex-shrink-0 flex-grow-0 w-[280px] flex-col max-w-[280px] gap-1 p-4 border-b">
                <h3 className="font-f-medium text-[13px] pb-1">RAM</h3>
                {ram.map((ram: string, index: number) => (
                    <div className="" key={index}>
                        <input type="checkbox" value={ram} />
                        <label className="font-f-regular text-[13px] pl-[5px]"> {ram}</label>
                    </div>
                ))}
            </div>
            <div className="flex flex-shrink-0 flex-grow-0 w-[280px] flex-col max-w-[280px] gap-1 p-4 border-b">
                <h3 className="font-f-medium text-[13px] pb-1">INTERNAL STORAGE</h3>
                {rom.map((rom: string, index: number) => (
                    <div className="" key={index}>
                        <input type="checkbox" value={rom} />
                        <label className="font-f-regular text-[13px] pl-[5px]"> {rom}</label>
                    </div>
                ))}
            </div>

        </div>
    );
};

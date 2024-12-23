import React, { useState } from "react";
import { useDetailsFetch } from "../../Hooks/useJsonFecth";
import { sortprops } from "../../Types/type";
import { useSortSection } from "../../Hooks/useSortSection";
import { useFilterContext } from "../../context/useContext";

export const SortSection: React.FC = () => {
    const [active, setActive] = useState<string | 'relevance'>('relevance')
    const { data } = useDetailsFetch();
    const { sortProduct } = useSortSection()
    const { filteredData, setFilteredData } = useFilterContext()
    const item = data?.data[0];
    const link = item?.link;
    const handleclick = async (id: string) => {
        setActive(id)
        const sortdata = await sortProduct(id)
        console.log(sortdata);
        setFilteredData(sortdata);
    };

    return (
        <div className=" flex pb-2  shadow-2xl font-f-regular  border-b pl-4 flex-col ">
            <div className="font-f-semibold pb-2">{item && item.content} {filteredData.length} {item && item.content1}</div>
            <div>
                <span className="text-sm font-normal mr-5">Sort By </span>
                {link?.map((item: sortprops, index: number) => (
                    <span className={`text-sm font-normal pb-[9px] cursor-pointer mr-5  active:font-f-medium active:text-flip-blue active:border-flip-blue ${active === item.id ? "text-flip-blue font-f-semibold border-b-2 border-flip-blue" : ""}`}
                        key={index} onClick={() => handleclick(item.id)}>{item.name}</span>
                ))}
            </div>
        </div>
    )
}                            

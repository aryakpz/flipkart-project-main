import React, { useState, useEffect } from "react";
import { useFetchProduct } from "../../Hooks/useFetchProduct";
import { useFilter } from "../../Hooks/useFilter";
import { PriceFilter } from "./filterPriceSection";
import { useDetailsFetch } from "../../Hooks/useJsonFecth";
import { useFilterContext } from "../../context/useContext";

export const LeftSection: React.FC = () => {
    const { data } = useFetchProduct();
    const { data: detailsdata } = useDetailsFetch();
    const { filter } = useFilter();
    const { setFilteredData } = useFilterContext();

    const [selectedFilters, setSelectedFilters] = useState({
        brand: [] as string[],
        ram: [] as string[],
        rom: [] as string[],
    });

    const Brands = Array.from(
        new Set(data?.viewProduct?.flatMap((item) => item.brand))
    );
    const ramOptions = Array.from(
        new Set(data?.viewProduct?.flatMap((item) => item.ram))
    );
    const romOptions = Array.from(
        new Set(data?.viewProduct?.flatMap((item) => item.rom))
    );

    const handleCheckboxChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        category: "brand" | "ram" | "rom"
    ) => {
        const value = e.target.value;
        const isChecked = e.target.checked;

        setSelectedFilters((prev) => {
            const updatedFilters = { ...prev };

            if (isChecked) {
                updatedFilters[category].push(value);
            } else {
                updatedFilters[category] = updatedFilters[category].filter(
                    (item) => item !== value
                );
            }
            return updatedFilters;
        });
    };

    useEffect(() => {
        const fetchFilteredData = async () => {
            const response = await filter(selectedFilters);
            if (response) {
                setFilteredData(response?.data?.filterdata);
            } else {
                console.error("Filter API call failed:", response.message);
            }
        };
        if (
            selectedFilters.brand.length ||
            selectedFilters.ram.length ||
            selectedFilters.rom.length
        ) {
            fetchFilteredData();
        }
        // else {
        //     setFilteredData(data?.viewProduct || filteredData)
        // }
    }, [selectedFilters, filter, data]);

    return (
        <div className="bg-white mr-2 mt-2 h-fit ">

            {detailsdata?.data.map((d: any) => (
                <React.Fragment>

                    {/* Brand Section */}
                    <div className="flex flex-shrink-0 flex-grow-0 w-[280px] flex-col max-w-[280px] gap-1 p-4 border-b">
                        <PriceFilter />
                        <h3 className="font-f-medium text-[13px] pb-1">{d.filter.brand}</h3>
                        <div className="flex border-b">
                            <img src={d.filter.bimg} className="w-3 pb-2 invert-[0.6]" />
                            <input
                                type="text"
                                placeholder="Search Brand"
                                className="text-sm font-f-regular focus:outline-none mb-2 p-1 pl-2"
                            />
                        </div>
                        {Brands.map((brand: string, index: number) => (
                            <div key={index}>
                                <input
                                    type="checkbox"
                                    value={brand}
                                    checked={selectedFilters.brand.includes(brand)}
                                    onChange={(e) => handleCheckboxChange(e, "brand")}
                                />
                                <label className="font-f-regular text-[13px] pl-[5px]">{brand}</label>
                            </div>
                        ))}
                        <p className="text-flip-blue text-xs font-f-medium pt-2">{d.filter.more}</p>
                    </div>

                    {/* Assured Section */}
                    <div className="flex flex-shrink-0 flex-grow-0 w-[280px] max-w-[280px] gap-1 p-4 border-b justify-between">
                        <div className="flex">
                            <input type="checkbox" />
                            <img src={d.filter.assure} className="w-20 pl-2" />
                        </div>
                        <div className="flex shadow-black rounded-[50%] w-5 p-1 border h-5 relative">
                            <p className="absolute left-[6px] top-[-2px]">?</p>
                        </div>
                    </div>

                    {/* RAM Section */}
                    <div className="flex flex-shrink-0 flex-grow-0 w-[280px] flex-col max-w-[280px] gap-1 p-4 border-b">
                        <h3 className="font-f-medium text-[13px] pb-1">{d.filter.ram}</h3>
                        {ramOptions.map((ram: string, index: number) => (
                            <div key={index}>
                                <input
                                    type="checkbox"
                                    value={ram}
                                    checked={selectedFilters.ram.includes(ram)}
                                    onChange={(e) => handleCheckboxChange(e, "ram")}
                                />
                                <label className="font-f-regular text-[13px] pl-[5px]">{ram}</label>
                            </div>
                        ))}
                    </div>

                    {/* ROM Section */}
                    <div className="flex flex-shrink-0 flex-grow-0 w-[280px] flex-col max-w-[280px] gap-1 p-4 border-b">
                        <h3 className="font-f-medium text-[13px] pb-1">{d.filter.rom}</h3>
                        {romOptions.map((rom: string, index: number) => (
                            <div key={index}>
                                <input
                                    type="checkbox"
                                    value={rom}
                                    checked={selectedFilters.rom.includes(rom)}
                                    onChange={(e) => handleCheckboxChange(e, "rom")}
                                />
                                <label className="font-f-regular text-[13px] pl-[5px]">{rom}</label>
                            </div>
                        ))}
                    </div>
                </React.Fragment>
            ))}
        </div>
    );
}





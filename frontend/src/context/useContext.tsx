import React, { createContext, useContext, useEffect, useState } from "react";
import { useFetchProduct } from "../Hooks/useFetchProduct";

interface FilterContextType {
  filteredData: any[]; 
  setFilteredData: React.Dispatch<React.SetStateAction<any[]>>;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const FilterProvider: React.FC<{children:React.ReactNode}> = ({ children }) => {
  const {data}=useFetchProduct()
  const [filteredData, setFilteredData] = useState<any[]>([]);
 
  useEffect(() => {
    if (data?.viewProduct && filteredData.length >= 0)  {
      setFilteredData(data.viewProduct); 
    }
  }, [data]); 

  return (
    <FilterContext.Provider value={{ filteredData, setFilteredData }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilterContext must be used within a FilterProvider");
  }
  return context;
};

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { mobileProps, filterProps } from '../Types/type';

type ProductContextType = {
  product: mobileProps[];
  filter: filterProps;
  setFilters: React.Dispatch<React.SetStateAction<filterProps>>;
};

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [product] = useState<mobileProps[]>([]);
  const [filter, setFilters] = useState<filterProps>({
    search: "",
    brandfilter: [],
    ramfilter: [],
    romfilter: [],
  });

  return (
    <ProductContext.Provider value={{ product, filter, setFilters }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProductContext must be used within a ProductProvider');
  }
  return context;
};

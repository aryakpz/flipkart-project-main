
import React from "react";
import { useDetailsFetch } from "../../Hooks/useJsonFecth";

export const NotFound: React.FC = () => {
    const {data}=useDetailsFetch()
    console.log(data?.data,'lkjnbhvghb')
    return (
        <div className="w-full justify-center text-center p-14  flex flex-col h-screen bg-white">
            {data?.data.map((item:any) => (
               <div className="font-f-regular h-full align-middle flex flex-col">
                    <div className="w-80 h-70 flex justify-center mx-auto">
                      <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/error-no-search-results_2353c5.png"
                       className=""
                      />
                    </div>
                    <div className="text-2xl font-semibold pt-5 pb-3">
                        <span>{item.notfound.sorry}</span>
                    </div>
                    <div className="text-xl mt-2">
                        <span>{item.notfound.please}</span>
                    </div>
               </div>
            ))
          }
        </div>
    ) 
}   
        
        
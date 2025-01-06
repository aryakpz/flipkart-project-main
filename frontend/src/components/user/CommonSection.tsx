import { NavBar } from "./navBar";
import { DropDown } from "./dropDown";
import { SingleProductPage } from "./SingleProduct";

export const CommonSection :React.FC = () => {
    return (
        <div className="flex flex-col">
            <NavBar />
            <DropDown />
            <div className="w-full bg-gray-100 m-auto h-screen p-4">
                <div className="mx-auto w-full min-w-[978px] max-w-[1300px] mt-[1px] h-screen  flex-col">
                    <div className="flex overflow-auto  pt ">
                        <SingleProductPage />
                    </div>
                </div>
            </div>
        </div>
    )
}                         
                 
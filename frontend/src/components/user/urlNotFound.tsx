import { Link } from "react-router-dom";

export const UrlNotFound=()=>{
    return(
        <div className="h-screen w-screen justify-center flex flex-col text-center gap-5">
           <span className="text-4xl font-bold font-f-medium">Sorry ,Page not found!</span>
           <span className="text-flip-blue">
            <Link to={"/"}>Go home</Link>
           </span>
        </div>
    )
}               
  
                                                                                                                 
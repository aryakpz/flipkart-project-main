import React from "react"
import { useNavigate } from "react-router-dom"

export const AdminNav: React.FC = () => {
    const nav=useNavigate()
     const handleClick=()=>{
        sessionStorage.clear()
        nav('/')
        
      }
    return (
        <div className="w-full h-10 bg-black f">
            <div className="flex px-6 justify-between">
                <div className="flex gap-1 px-5">
                    <button className="text-white  hover:bg-slate-500  px-6 py-2" onClick={()=>nav('/adminpage')}>Home</button>
                    <button className="text-white hover:bg-slate-500 px-6" onClick={()=>nav('/dashboard')}>DashBoard</button>
                </div>
                <div>
                    <button className="text-white  hover:bg-slate-500 px-6 py-2" onClick={handleClick}>Logout </button>
                </div>
            </div>
        </div>
    )
}
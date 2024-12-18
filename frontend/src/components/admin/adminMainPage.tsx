import React from "react"
import { AdminNav } from "./adminNav"
import { AddProduct } from "./AddProduct"

export const AdminPage:React.FC = () => {
    return (
        <div>
        <AdminNav/>
        <AddProduct/>
        </div>
    )
}
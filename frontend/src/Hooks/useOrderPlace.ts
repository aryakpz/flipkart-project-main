import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export const useOrderPlace = () => {
    const nav = useNavigate()
    const { mutate } = useMutation({
        mutationFn: async (values: any) => {
            return await axios.post("/api/admin/order", values)
        },
        onSuccess: () => {
            alert("order placed successfully")
            nav(-1)
        }
    })

    const orderplaced = (values: any) => {
        console.log(values)
        mutate(values)
    }

    return { orderplaced }
} 
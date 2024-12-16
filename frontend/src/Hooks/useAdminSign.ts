import { useMutation } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom"
import { userSignProps } from "../Types/type"
import axios from "axios"

export const useAdminSign = () => {
    const nav = useNavigate()
    const { mutate } = useMutation({
        mutationFn: (values: userSignProps) => {
            return axios.post("http://localhost:5002/admin/sign", values)
        },
        onSuccess: () => {
            nav('/adminlogin')
        },
    });
    const addAdmin = (values: userSignProps) => {
        mutate(values)
    }
    return {
        addAdmin
    }
}
import { useMutation } from "@tanstack/react-query"
import { userLoginProp } from "../Types/type"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export const useAdminLogin = () => {
    const nav = useNavigate()
    const { mutate } = useMutation({
        mutationFn: (values: userLoginProp) => {
            return axios.post("http://localhost:5002/admin/login", values)
        },
        onSuccess() {
            nav('/adminpage')
        },
        onError(){
            alert("Invalid Username or Password")  
            window.location.reload()
        }
    })
    const adminLogin = (values: userLoginProp) => {
        mutate(values)
    }
    return { adminLogin }
}
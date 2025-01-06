import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { userLoginProp } from "../Types/type";
import axios from "axios";

export const useLoginUser = () => {
    const nav = useNavigate()
    const { mutate } = useMutation({
        mutationFn: async (values: userLoginProp) => {
            return (await (axios.post('http://localhost:5002/admin/login', values))).data
        },
        onSuccess: (data) => {
            const prev = sessionStorage.getItem("prevPage")
            sessionStorage.setItem("token", data.data.token)
            sessionStorage.setItem("role", data.data.role)
            sessionStorage.setItem("name", data.data.username)
            if (sessionStorage.getItem("role") === 'admin') {
                nav('/adminpage')
            }
            else {
                nav(prev || '/')
            }
        },
        onError() {
            alert("Invalid username or password!")
        }
    })
    const loginUser = (values: userLoginProp) => {
        mutate(values)
    }
    return {
        loginUser
    }
}


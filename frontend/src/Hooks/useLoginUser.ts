import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { userLoginProp } from "../Types/type";
import axios from "axios";

export const useLoginUser = () => {
    const nav = useNavigate()
    const { mutate } = useMutation({
        mutationFn: async (values: userLoginProp) => {
            return (await (axios.post('http://localhost:5002/user/login', values))).data
        },
        onSuccess: (data) => {
            const prev = sessionStorage.getItem("prevPage")
            nav(prev || '/')
            sessionStorage.setItem("token", data.data.token)
            sessionStorage.setItem("name", data.data.username)
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

   
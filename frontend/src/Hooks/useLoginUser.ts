import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { userLoginProp } from "../Types/type";
import axios from "axios";

export const useLoginUser = () => {
    const nav = useNavigate()
    const { mutate } = useMutation({
        mutationFn: (values: userLoginProp) => {
            return axios.post('http://localhost:5002/user/login', values)
        },
        onSuccess:()=>{
            nav('/main')
        },
        onError(){
            alert("Invalid username or password!")
        }
    })
    const loginUser=(values:userLoginProp)=>{
        mutate(values)
    }
    return {
          loginUser 
    }
}
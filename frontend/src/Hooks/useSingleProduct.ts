import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const useSingleItem = () => {   
    const nav = useNavigate()
    const { mutate } = useMutation({
        mutationFn: async (id: number) => {
            const res = await (axios.get(`/api/user/singleProduct/${id}`))
            console.log(res.data.data.result)
            return res.data.data.result;
        },
        onSuccess: (data) => {
            nav('/singlePage', { state: data })
        }
    })
    const getSingleProduct = (id: number) => {
        mutate(id)
    }                           
    return { getSingleProduct }                    
}                                                                                                                                             





import { useMutation } from "@tanstack/react-query"
import { mobileProps } from "../Types/type"
import axios from "axios"

export const useAddProducts = () => {
    const { mutate } = useMutation({
        mutationFn: (values: mobileProps) => {
            return axios.post('http://localhost:5002/admin/addProduct', values,{
                headers:{
                    "content-type":"multipart/form-data"
                }
            })
        },
        onSuccess:()=>{
         alert("Mobile Added successfully!")
        },
        onError(){
            alert("Something went wrong,Failed to insert!")
        }
    })

    const addProducts=(values:mobileProps)=>{
        mutate(values)
    }
    return{
        addProducts
    }
}                                                                                                                  
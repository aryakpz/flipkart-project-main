import { useMutation } from "@tanstack/react-query"
import { mobileProps } from "../Types/type"
import axios from "axios"

export const useAddProducts = () => {
    const token = sessionStorage.getItem("token")
    const { mutate } = useMutation({
        mutationFn: (values: mobileProps) => {
            return axios.post('http://localhost:5002/admin/addProduct', values, {
                headers: {
                    "content-type": "multipart/form-data",
                    "Authorization": `Bearer ${token}`
                }
            })
        },
        onSuccess: () => {
            alert("Mobile Added successfully!")
            window.location.reload()
        },
        onError:() =>{
            alert("Something went wrong,Failed to insert!")
        }
    })

    const addProducts = (values: mobileProps) => {
        mutate(values)
    }
    return {
        addProducts
    }
}                                                                                                                       
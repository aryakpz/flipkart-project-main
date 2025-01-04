import { useMutation } from "@tanstack/react-query";
import axios from "axios";


export const useSearch = () => {
    const { mutate } = useMutation({
        mutationFn: async (values: string) => {
            const res = (await (axios.post('/api/user/search', { search: values })))
            return res.data.data
        },
    })
    const searchProduct = (values: string) => {
        console.log(values, "frontend")
        mutate(values)
    }
    return {
        searchProduct
    }
}



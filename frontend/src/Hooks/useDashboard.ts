import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export const useGetDashBoard = () => {
    const { data } = useQuery({
        queryKey: ['order'],
        queryFn: async () =>
            await axios.get('/api/admin/dashboard')
                .then(res => res.data)
    })
    return { data: data?.data }
}   
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export const useFilter = () => {
    const { mutateAsync } = useMutation({
        mutationFn: async (filters: { brand?: string[]; ram?: string[]; rom?: string[]; price?: { min: string; max: string } }) => {
            const response = await axios.post("/api/user/filter", filters);
            return response?.data?.data?.filterdata
        }
    })

    const filtersec = async(filters: { brand?: string[]; ram?: string[]; rom?: string[]; price?: { min: string; max: string } }) => {
        const data=await mutateAsync(filters)
        return data
    }
    return { filtersec }
};



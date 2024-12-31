import axios from "axios";

export const useFilter = () => {
    const filter = async (filters: { brand?: string[]; ram?: string[]; rom?: string[]; price?: { min: number; max: number } }) => {
        try {
            const response = await axios.post("http://localhost:5002/user/filter", filters);
            return response.data;
        } catch (error) {
            return { success: false, message: "Filter failed", };
        }
    };
    return { filter };
};


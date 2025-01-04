import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export const useSortSection = () => {
  const mutation = useMutation({
    mutationFn: async (id: string) => {
      const response = await axios.post('/api/user/sort', { id });
      return response?.data?.data;
    }
  });
  const sortProduct = async (id: string) => {
    const data = await mutation.mutateAsync(id);  
    return data;
  };
  return { sortProduct };
}; 
 
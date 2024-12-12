import { useQuery } from "@tanstack/react-query";
import { getDetails } from "../utils/utilsFunctions";

export const useDetailsFetch = () => {
     return useQuery({
        queryKey: ['detials'],
        queryFn: getDetails,
    })
}

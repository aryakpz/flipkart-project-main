import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { responsePropse } from "../Types/type";

export const useFetchProduct = () => {
    const { data } = useQuery<responsePropse>({

        queryKey: ['mobiles'],
        queryFn: () =>
            axios.get('/api/user/viewProduct')
                .then(res => res.data)
    });
    return { data: data?.data };
}; 

 
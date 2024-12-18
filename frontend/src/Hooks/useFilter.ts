import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

export const useFilter = () => {
    const [filteredData, setFilter] = useState([])
    const { mutate } = useMutation({
        mutationFn: (values: string[]) => {
            const newvalue = { values }
            return axios.post('http://localhost:5002/admin/filter', newvalue)
        },
        onSuccess: (data) => {
            console.log(data.data.data.filterdata)
            setFilter(data.data.data.filterdata)
        },
        onError() {
            alert("Something went wrong,Failed to insert!")
        }
    })

    const filter = (values: string[]) => {
        mutate(values)
        console.log("val", values)
    }
    return {
        filter,
        filteredData
    }
}


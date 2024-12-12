import axios from "axios"

export const getDetails =async ()=>{
    return axios.get('data/data.json')
}

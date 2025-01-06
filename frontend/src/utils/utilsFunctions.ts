import axios from "axios"

export const getDetails =async ()=>{
    return  await axios.get('data/data.json')
}


export const getlog = () => {
    const val = sessionStorage.getItem("token");
    return !!val;
  };
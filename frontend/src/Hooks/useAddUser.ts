import { useMutation } from "@tanstack/react-query";
import { userLoginProp } from "../Types/type";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const useAddUser = () => {
    const navigate = useNavigate();
    const { mutate } = useMutation({
        mutationFn: async (values: userLoginProp) => {
            const response = await axios.post("http://localhost:5002/admin/sign", values);
            return response.data;
        },
        onSuccess: () => {
            navigate("/");
        },
        onError: (error: any) => {
            console.error("Error adding user:", error);
            alert("The user already exists!");
        }
    });
    const addUser = (values: userLoginProp) => {
        mutate(values);
    };
    return { addUser };
};






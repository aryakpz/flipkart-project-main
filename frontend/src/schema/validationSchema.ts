import * as yup from "yup";

export const validationSchema = yup.object({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Invalid mail ID").required("email is required"),
    password: yup.string().required("password is required"),
    username: yup.string().required("username is required")
})

export const LoginSchema = yup.object({
    username: yup.object().required("Username is required"),
    password: yup.object().required("Password is required")
})
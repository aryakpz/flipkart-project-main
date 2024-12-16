import {z} from "zod"

export const AdminSchema=z.object({
    name:z.string(),
    email:z.string().email(),
    username:z.string().min(5,"Username must be atleast 5 character").max(15,"Username must be at atmost 10 character"),
    password:z.string().min(5,"Username must be atleast 5 character").max(15,"Username must be at atmost 10 character")
})

export const AdminLogin=z.object({
    username:z.string().min(5,"Username must be atleast 5 character").max(15,"Username must be at atmost 10 character"),
    password:z.string().min(5,"Username must be atleast 5 character").max(15,"Username must be at atmost 10 character")
})
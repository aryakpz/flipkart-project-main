import {z} from "zod"

export const UsersSchema=z.object({
    username:z.string().min(4,"Username must be atleast 5 character").max(15,"Username must be at atmost 10 character"),
    password:z.string().min(5,"Username must be atleast 5 character").max(15,"Username must be at atmost 10 character"),
    role:z.enum(["admin","user"])
})

export const UsersLogin=z.object({
    username:z.string().min(4,"Username must be atleast 5 character").max(15,"Username must be at atmost 10 character"),
    password:z.string().min(5,"Username must be atleast 5 character").max(15,"Username must be at atmost 10 character")
})
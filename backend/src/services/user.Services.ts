import bcrypt from "bcrypt";
import { USERTABLE } from "../models/user.model";
import jwt from "jsonwebtoken"

export const hashingPassword = async (password: string) => {
    const newPass = await bcrypt.hash(password, 8)
    return newPass
}

export const addUserToDb = async (name: string, email: string, username: string, password: string) => {
    const insert = await USERTABLE.create({ name, email, username, password })
    return insert
}

export const getSingleUser = async (username: string, password: string) => {
    const user = await USERTABLE.findOne({ where: { username: username } })
    if (!user) {
        throw new Error ("user not found" )
    }
    const passwordCheck = await bcrypt.compare(password, user.password)
    if (!passwordCheck) {
        throw new Error ("Invalid Password" )
    }
    if (!process.env.JWT_KEY) {
        throw new Error(" something went wrong!")
    }
    const token = jwt.sign(
        {
            user: {
                username: user.username,
                id: user.id
            },
        },
        process.env.JWT_KEY,
        { expiresIn: "2h" }
    );
    return {
        username: user.username,
        token: token
    }

}

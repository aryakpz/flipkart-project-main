import { ErrorMessage, Field, Formik, Form } from "formik";
import React from "react";
import { LoginSchema } from "../../schema/validationSchema";
import { useAddUser } from "../../Hooks/useAddUser";

export const SignIn: React.FC = () => {
    const { addUser } = useAddUser()
    const initialValues = {
        username: "",
        password: "",
        role: ""
    }

    const onSubmit = (values: typeof initialValues) => {
        addUser(values)
    }

    return (
        <div className="flex flex-col p-20 font-f-semibold max-w-xl  w-full m-auto ">
            <h1 className="text-flip-blue text-3xl text-center p-6">Flipkart SignUp</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={LoginSchema}
                onSubmit={onSubmit}
            >
                <Form className="flex flex-col">
                    <div className="mb-4">
                        <Field
                            name="username"
                            type="text"
                            placeholder="User Name"
                            className="w-full p-3 border rounded"
                        />
                        <ErrorMessage name="username" component="div" className="text-red-500 text-sm mt-1" />
                    </div>
                    <div className="mb-4">
                        <Field
                            name="password"
                            type="password"
                            placeholder="Enter Password"
                            className="w-full p-3 border rounded"
                        />
                        <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
                    </div>
                    <div className="mb-4">
                        <p className="text-sm mb-2">Select Role:</p>
                        <div>
                            <label className="mr-4">
                                <Field
                                    type="radio"
                                    name="role"
                                    value="admin"
                                    className="mr-2"
                                />
                                Admin
                            </label>
                            <label>
                                <Field
                                    type="radio"
                                    name="role"
                                    value="user"
                                    className="mr-2"
                                />
                                User
                            </label>
                        </div>
                        <ErrorMessage
                            name="role"
                            component="div"
                            className="text-red-500 text-sm mt-1"
                        />
                    </div>
                    <div className="text-center">
                        <button type="submit" className="bg-flip-blue text-white p-3 rounded-lg w-4/12 text-2xl hover:bg-blue-800 active:transform active:[scale:0.98] active:bg-flip-blue ">
                            Sign In
                        </button>
                    </div>
                </Form>
            </Formik>
            <p className="text-flip-blue font-f-regular text-xs"><a href="/login">Login</a> </p>
        </div>

    )
}


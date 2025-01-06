import { ErrorMessage, Field, Formik, Form } from "formik";
import React from "react";
import { LoginSchema } from "../../schema/validationSchema";
import { useLoginUser } from "../../Hooks/useLoginUser";

export const Login: React.FC = () => {
    const { loginUser } = useLoginUser()
    const initialValues = {
        username: "",
        password: "",
    }

    const onSubmit = (values: typeof initialValues) => {
        loginUser(values)
    }

    return (
        <div className="flex flex-col p-20  font-f-semibold max-w-xl  w-full m-auto ">
            <h1 className="text-flip-blue text-3xl text-center p-6">Flipkart Login </h1>
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
                    <div className="text-center">
                        <button type="submit" className="bg-flip-blue text-white p-3 rounded-lg w-4/12 text-2xl hover:bg-blue-800 active:transform active:[scale:0.98] active:bg-flip-blue ">
                            Login
                        </button>
                    </div>
                </Form>
            </Formik>
            <div>
                <p className="font-f-regular text-xs text-gray-500 pt-8">
                    <a href="/sign" className="text-flip-blue">SignIn </a>
                    if You dont have an account?</p>
            </div>
        </div>

    )
}


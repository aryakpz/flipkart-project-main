import { ErrorMessage, Field, Formik, Form } from "formik";
import React from "react";
import { validationSchema } from "../../schema/validationSchema";

export const SignIn: React.FC = () => {
    const initialValues = {
        name: " ",
        email: " ",
        username: " ",
        password: " ",
    }

    const onSubmit = (values: typeof initialValues) => {
        console.log(values)
    }
    return (
        <div className="flex flex-col m-10 p-10">
            <h1>Sign In to Facebook</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                <Form className="flex flex-col">
                    <div className="mb-4">
                        <Field
                            name="name"
                            type="text"
                            placeholder="Full Name"
                            className="w-full text-blue-600 p-2 border rounded"
                        />
                        <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
                    </div>
                    <div className="mb-4">
                        <Field
                            name="email"
                            type="email"
                            placeholder="Email ID"
                            className="w-full p-2 border rounded"
                        />
                        <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                    </div>
                    <div className="mb-4">
                        <Field
                            name="username"
                            type="text"
                            placeholder="User Name"
                            className="w-full p-2 border rounded"
                        />
                        <ErrorMessage name="username" component="div" className="text-red-500 text-sm mt-1" />
                    </div>
                    <div className="mb-4">
                        <Field
                            name="password"
                            type="password"
                            placeholder="Enter Password"
                            className="w-full p-2 border rounded"
                        />
                        <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
                    </div>
                    <div>
                        <button type="submit" className="bg-black text-white p-3 rounded-lg">
                            Sign In
                        </button>
                    </div>
                </Form>
            </Formik>
        </div>

    )
}


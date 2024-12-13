import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { LoginSchema } from "../../schema/validationSchema";

export const Login: React.FC = () => {
    const initialValues = {
        username: "",
        password: ""
    }
    const onSubmit = () => {
        console.log("logged In")
    }
    return (
        <div>
            <h1>Login into FaceBook</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={LoginSchema}
                onSubmit={onSubmit}
            >
                <Form>
                    <div>
                        <Field name="username" type="text" />
                        <ErrorMessage component="div" name="username" />
                    </div>
                    <div>
                        <Field name="password" type="password" />
                        <ErrorMessage component="div" name="password" />
                    </div>
                    <div>
                        <button type="submit">Login</button>
                    </div>
                </Form>
            </Formik>
        </div>
    )
}


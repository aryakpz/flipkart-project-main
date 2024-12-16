import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { mobileValidationSchema } from "../../schema/mobileValidation";
import { useAddProducts } from "../../Hooks/useAddProduct";

export const AddProduct: React.FC = () => {
    const {addProducts}=useAddProducts()
    const initialValues = {
        brand: '',
        ram: '',
        rom: '',
        screen: '',
        camara: '',
        processor: '',
        warrenty: '',
        price: '',
        discount: '',
        exchange: '',
        image: null, 
    }

    const onSubmit = (values: any) => {
        console.log("Form Values:", values);
        addProducts(values);
    }

    return (
        <div className="flex flex-col p-20 font-f-semibold max-w-3xl w-full m-auto">
            <h1 className="text-flip-blue text-3xl text-center p-6">Add Product details</h1>
            <Formik
                validationSchema={mobileValidationSchema}
                initialValues={initialValues}
                onSubmit={onSubmit}
            >
                {({ setFieldValue }) => (
                    <Form className="flex flex-col">
                        <div className="mb-4">
                            <Field name="brand" type="text" placeholder="Enter brand name" className="w-full p-3 border rounded" />
                            <ErrorMessage name="brand" component="div" className="text-red-500 text-sm mt-1" />
                        </div>
                        <div className="mb-4">
                            <Field name="price" type="text" className="w-full p-3 border rounded" placeholder="Enter price" />
                            <ErrorMessage name="price" component="div" className="text-red-500 text-sm mt-1" />
                        </div>
                        <div className="mb-4">
                            <Field name="ram" type="text" className="w-full p-3 border rounded" placeholder="Enter ram size" />
                            <ErrorMessage name="ram" component="div" className="text-red-500 text-sm mt-1" />
                        </div>
                        <div className="mb-4">
                            <Field name="rom" type="text" className="w-full p-3 border rounded" placeholder="Enter rom size" />
                            <ErrorMessage name="rom" component="div" className="text-red-500 text-sm mt-1" />
                        </div>
                        <div className="mb-4">
                            <Field name="camara" type="text" className="w-full p-3 border rounded" placeholder="Enter camara Size" />
                            <ErrorMessage name="camara" component="div" className="" />
                        </div>
                        <div className="mb-4">
                            <Field name="screen" type="text" className="w-full p-3 border rounded" placeholder="Enter the screen size" />
                            <ErrorMessage name="screen" component="div" className="text-red-500 text-sm mt-1" />
                        </div>
                        <div className="mb-4">
                            <Field name="processor" type="text" className="w-full p-3 border rounded" placeholder="Enter Processor" />
                            <ErrorMessage name="processor" component="div" className="text-red-500 text-sm mt-1" />
                        </div>
                        <div className="mb-4">
                            <Field name="warrenty" type="text" className="w-full p-3 border rounded" placeholder="Enter the warrenty" />
                            <ErrorMessage name="warrenty" component="div" className="text-red-500 text-sm mt-1" />
                        </div>
                        <div className="mb-4">
                            <Field name="discount" type="text" className="w-full p-3 border rounded" placeholder="Enter the discount Price" />
                            <ErrorMessage name="discount" component="div" className="text-red-500 text-sm mt-1" />
                        </div>
                        <div className="mb-4">
                            <Field name="exchange" type="text" className="w-full p-3 border rounded" placeholder="Enter the Exchang Offers" />
                            <ErrorMessage name="exchange" component="div" className="text-red-500 text-sm mt-1" />
                        </div>

                        <div className="mb-4">
                            <input
                                name="image"
                                type="file"
                                onChange={(event) => {
                                    const file = event.target.files?.[0];
                                    if (file) {
                                        setFieldValue("image", file);
                                    }
                                }}
                                className="w-full p-3 border rounded"
                            />
                            <ErrorMessage name="image" component="div" className="text-red-500 text-sm mt-1" />
                        </div>
                        <div className="mb-4 text-center">
                            <button type="submit" className="bg-flip-blue text-white p-3 rounded-lg w-4/12 text-2xl hover:bg-blue-800 active:transform active:[scale:0.98] active:bg-flip-blue"> Submit</button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
}





import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { mobileValidationSchema } from "../../schema/mobileValidation";
import { useAddProducts } from "../../Hooks/useAddProduct";

export const AddProduct: React.FC = () => {
    const {addProducts}=useAddProducts()
    const initialValues = {
        name: '',
        color: '',    
        brand: '',
        price: '',
        ram: '',   
        rom: '',
        screen: '',
        frontcamera: '',
        backcamera: '',   
        processor: '',
        warranty: '',
        discount: '',
        exchange: '',
        image: null,
        battery: '',
        oldprice: '',
    }     

    const onSubmit = async (values: any) => {                        
         console.log(values,"form")
            await addProducts(values); 
    };
    
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
                            <Field name="name" type="text" placeholder="Enter Detailed name" className="w-full p-3 border rounded" />
                            <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
                        </div>
                        <div className="mb-4">
                            <Field name="brand" type="text" placeholder="Enter brand name" className="w-full p-3 border rounded" />
                            <ErrorMessage name="brand" component="div" className="text-red-500 text-sm mt-1" />
                        </div>
                        <div className="mb-4">
                            <Field name="price" type="text" className="w-full p-3 border rounded" placeholder="Enter price" />
                            <ErrorMessage name="price" component="div" className="text-red-500 text-sm mt-1" />
                        </div>
                        <div className="mb-4">
                            <Field name="color" type="text" className="w-full p-3 border rounded" placeholder="Enter color" />
                            <ErrorMessage name="color" component="div" className="text-red-500 text-sm mt-1" />
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
                            <Field name="frontcamera" type="text" className="w-full p-3 border rounded" placeholder="Enter frontcamera Size" />
                            <ErrorMessage name="frontcamera" component="div" className="" />
                        </div>
                        <div className="mb-4">
                            <Field name="backcamera" type="text" className="w-full p-3 border rounded" placeholder="Enter backcamera Size" />
                            <ErrorMessage name="backcamera" component="div" className="" />
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
                            <Field name="battery" type="text" className="w-full p-3 border rounded" placeholder="Enter Battery capacity"/>
                            <ErrorMessage name="battery" component="div" className="text-red-500 text-sm mt-1" />
                        </div>
                        <div className="mb-4">
                            <Field name="oldprice" type="text" className="w-full p-3 border rounded" placeholder="Enter the Previous phone price" />
                            <ErrorMessage name="oldprice" component="div" className="text-red-500 text-sm mt-1" />
                        </div>
                        <div className="mb-4">
                            <Field name="warranty" type="text" className="w-full p-3 border rounded" placeholder="Enter the warrenty" />
                            <ErrorMessage name="warranty" component="div" className="text-red-500 text-sm mt-1" />
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
     



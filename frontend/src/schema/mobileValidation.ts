import * as yup from "yup"

export const mobileValidationSchema = yup.object({
   name: yup.string().required("This field is required"),
   brand: yup.string().required("This field is required"),
   price: yup.string().required("This field is required"),
   color: yup.string().required("This field is required"),
   rom: yup.string().required("This field is required"),
   ram: yup.string().required("This field is required"),
   processor: yup.string().required("This field is required"),
   warranty: yup.string().required("This field is required"),
   frontcamera: yup.string().required("This field is required"),
   backcamera: yup.string().required("This field is required"),
   screen: yup.string().required("This field is required"),
   discount: yup.string().required("This field is required"),
   exchange: yup.string().required("This field is required"),
   image: yup.mixed().required("This field is required"),
   oldprice: yup.number().required("This filed is required"),
   battery: yup.string().required("This filed is required")
})


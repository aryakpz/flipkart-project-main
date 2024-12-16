import * as yup from "yup"

export const mobileValidationSchema=yup.object({
   brand:yup.string().required("This field is required"),
   price:yup.string().required("This field is required"),
   rom:yup.string().required("This field is required"),
   ram:yup.string().required("This field is required"),
   processor:yup.string().required("This field is required"),
   warrenty:yup.string().required("This field is required"),
   camara:yup.string().required("This field is required"),
   screen:yup.string().required("This field is required"),
   discount:yup.string().required("This field is required"),
   exchange:yup.string().required("This field is required"),
   image:yup.mixed().required("This field is required")
})
    

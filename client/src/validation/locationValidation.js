import * as yup from "yup";

export const locationSchema = yup.object().shape({
    mine_id: yup.number().required("Mine required"),
    latitude: yup.string().required("Latitude required"),
    longitude: yup.string().required("Latitude required"),
    description: yup.string().required("Description required"),
    severity: yup.string().required("Severity required")
})
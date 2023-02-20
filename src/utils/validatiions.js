import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  tasks: Yup.string().required("Tasks is required"),
  backendHoursW: Yup.number()
    .required("Backend Worse in hours is required")
    .positive("Backend Worse in hours must be a positive number"),
  backendHoursR: Yup.number()
    .required("Backend Realistic in hours is required")
    .positive("Backend Realistic in hours must be a positive number"),
  backendHoursB: Yup.number()
    .required("Backend Best in hours is required")
    .positive("Backend Best in hours must be a positive number"),
  frontendHoursW: Yup.number()
    .required("Frontend Worse in hours is required")
    .positive("Frontend Worse in hours must be a positive number"),
  frontendHoursR: Yup.number()
    .required("Frontend Realistic in hours is required")
    .positive("Frontend Realistic in hours must be a positive number"),
  frontendHoursB: Yup.number()
    .required("Frontend Best in hours is required")
    .positive("Frontend Best in hours must be a positive number"),
  costBackend: Yup.number()
    .required("Cost BE in currency is required")
    .positive("Cost BE in currency must be a positive number"),
  costFrontEnd: Yup.number()
    .required("Cost FE in currency is required")
    .positive("Cost FE in currency must be a positive number"),
});

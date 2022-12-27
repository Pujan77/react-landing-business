import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Contact = () => {
  const initialValues = {
    fullName: "",
    email: "",
    subject: "",
    message: "",
  };

  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required("Full name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    subject: Yup.string().required("Subject is required"),
    message: Yup.string().required("Message is required"),
  });

  const onSubmit = (values, { setSubmitting, setStatus }) => {
    // Send form data to the server using an API or a function
    // sendFormData(values).then(() => {
    //   setSubmitting(false);
    //   setStatus({ success: true });
    // }).catch((error) => {
    //   setSubmitting(false);
    //   setStatus({ success: false });
    //   console.error(error);
    // });
  };

  return (
    <div className="row">
      <div className="col col-6"></div>
      <div className="col col-6">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting, status }) => (
            <Form className="contact-form">
              {status && status.success ? (
                <div className="alert alert-success">
                  Your message has been sent successfully!
                </div>
              ) : null}
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <Field
                  type="email"
                  name="email"
                  id="email"
                  className="form-control"
                />
                <ErrorMessage
                  component="div"
                  name="email"
                  className="invalid-feedback"
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={isSubmitting}
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Contact;

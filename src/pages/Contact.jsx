import React, { useRef, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ContactForm } from "../content";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [statusForm, setStatusForm] = useState(null);
  const initialValues = {
    fullName: "",
    email: "",
    subject: "",
    message: "",
  };
  const form = useRef();
  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required("Full name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    subject: Yup.string().required("Subject is required"),
    message: Yup.string().required("Message is required"),
  });

  const onSubmit = async (values, { setSubmitting }) => {
    setSubmitting(true);
    emailjs
      .sendForm(
        `${process.env.REACT_APP_SERVICE_ID}`,
        `${process.env.REACT_APP_TEMPLATE_ID}`,
        form.current,
        `${process.env.REACT_APP_PROFILE_ID}`
      )
      .then(
        (result) => {
          setSubmitting(false);
          setStatusForm({ success: true });
          form.current.reset();
        },
        (error) => {
          setSubmitting(false);
          setStatusForm({ success: false });
        }
      );
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
          {({ isSubmitting }) => (
            <Form ref={form} className="contact-form">
              {statusForm && statusForm.success ? (
                <div className="alert alert-success">
                  Your message has been sent successfully!
                </div>
              ) : (
                <></>
              )}
              <div className="contact_page_form">
                <h6 className="contact_form_title">
                  Fill the information below to contact us
                </h6>
                {ContactForm.map((contact, i) => (
                  <div className="form-group text-start">
                    <label htmlFor={contact.name}>{contact.display}</label>
                    <Field
                      type={contact.type}
                      name={contact.name}
                      id={contact.name}
                      placeholder={contact.placeHolder}
                      className="form-control"
                    />
                    <ErrorMessage
                      component="div"
                      name={contact.name}
                      className="invalid-feedback"
                    />
                  </div>
                ))}
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submit" : "Submitting"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Contact;
